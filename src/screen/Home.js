import React, { useCallback, useEffect, useState } from 'react';
import ListData from '../component/ListData';
import {FlatList, InteractionManager, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '@rneui/base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { routeApi, sessionKey } from '../util/Helper';
import { ApiManager } from '../api/ApiManager';
import { useFocusEffect } from '@react-navigation/native';
import MessageUtil from '../util/MessageUtil';
import Header from '../component/Header';
import { Storage } from '../util/Storage';

let length = 0;
let isLast = false;

const Home = ({navigation, route}) => {
  const [listfetch, setListfetch] = useState([]);
  let onProgress = false;

  const [dataKosong, setDataKosong] = useState(false);
  const [extraData, setExtraData] = useState(false);
  const [loadIndicator, setLoadIndicator] = useState(false);
  const [loadingOpen, setLoadingOpen] = useState(true);
  const [pullRefresh, setPullRefresh] = useState(false);



  const listDump = [
    {
        id: 1,
      name: 'Taqin',
      address: 'Jepara',
      nip: '121212',
      sex: 'L',
    },
    {
        id: 2,
      name: 'Agus',
      address: 'Jepara',
      nip: '121212',
      sex: 'P',
    },
    {
        id: 3,
      name: 'Joni',
      address: 'Jepara',
      nip: '121212',
      sex: 'L',
    },
    {
        id: 4,
        name: 'Mei Mei',
        address: 'Jepara',
        nip: '121212',
        sex: 'L',
    },
    {
        id: 5,
        name: 'Susanti',
        address: 'Jepara',
        nip: '121212',
        sex: 'L',
    },
    {
        id: 6,
        name: 'Jarjit',
        address: 'Jepara',
        nip: '121212',
        sex: 'L',
    },
  ];

  useFocusEffect( useCallback( () => {
    const task = InteractionManager.runAfterInteractions(
      () => {
        fetchData();
      }
    );

    return () => { task.cancel() }; 
  }, []) )

  const fetchData = async () => {
    let params = {
      "start": length,
      "count": 10
    }

    if(length == 0) {
      setListfetch([]);
    }


    let res = await ApiManager('post', params, routeApi.list_karyawan);
    let status = res.metadata.status,
        message = res.metadata.message,
        response = res.response;
        
    if(status === 200){
      setListfetch( length === 0 ? response : listfetch.concat(response) );
      setExtraData( true );
      
      isLast = false;
      setLoadingOpen(false);
      setPullRefresh(false);
    } else {
      console.log(status, '=== NOT FOUND ====');

      MessageUtil.showFailed(message);
      if (length === 0) {
        setDataKosong(true);
      }
      isLast = true;
      setLoadingOpen(false);
      setPullRefresh(false);
      setExtraData(false);
    }
    
    // console.log('listfetch', response, status, message);
  }

  const loadMore = async () => {
    console.log("last", length);
    if (!isLast) {
      // setLoadIndicator(true);
      length += 10;
      console.log('jumlah', length);
      fetchData();
    }


  }

  const deleteKaryawan = async (sNIP) => {
    const params = {
        "nip": sNIP
    }
    const res = await ApiManager('post', params, routeApi.delete_karyawan);
    let status = res.metadata.status,
        message = res.metadata.message,
        response = res.response;
        
    if(status === 200){
      isLast = false;
      setExtraData(true);

      MessageUtil.showSuccess(message);

      fetchData();
    } else {
      MessageUtil.showFailed(message);
    }
}

  const prosesLogout = async () => {
    Storage.RemoveValue(sessionKey);

    const sesi = Storage.GetAsObject(sessionKey);
    if (sesi == null || sesi == undefined) {
      navigation.replace('Login');
      MessageUtil.showSuccess('Berhasil Logout');
    }
  }


  return (
    <View style={style.container}>
      <Header label='Home' buttonBack={false} buttonLogout={true} navigation={navigation} clickLogout={
        () => { prosesLogout() }
      } />
      <FlatList
        
        data={listfetch}
        keyExtractor={(item, index) => `${item.nip + index}`}
        extraData={extraData}
        onEndReached={()=>{ loadMore()} }
        renderItem={({item}) => (
          <ListData
            nip={item.nip}
            fullname={item.nama}
            address={item.alamat}
            id={item.nip}

            onPress={() => {navigation.navigate('Form', {tag: 'edit', nip: item.nip } )} }
            onDelete={
              () => { deleteKaryawan(item.nip); }
            }
          />
        )}
      />
      <TouchableOpacity style={style.actionButton} onPress={
        () => { navigation.navigate('Form', {tag: 'Tambah'}) }
      } >
        <FontAwesome name='plus' size={30} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1
    },
    actionButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 50,
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "green"
    }
})

export default Home;
