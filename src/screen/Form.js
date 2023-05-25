import {Text, color} from '@rneui/base';
import React, { useEffect, useState } from 'react';
import {TouchableOpacity, View} from 'react-native';
import FormControl from '../component/FormControl';
import DropdownControl from '../component/DropdownControl';
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Header from '../component/Header';
import { ApiManager } from '../api/ApiManager';
import { routeApi } from '../util/Helper';
import moment from 'moment';
import MessageUtil from '../util/MessageUtil';

const Form = ({navigation, route}) => {
    const {tag, nip} = route.params;
    const [fullname, setFullname] = useState('');
    const [address, setAddress] = useState('');
    const [date, setdate] = useState(new Date());

    
    const [sex, setSex] = useState('');

    const changeSex = (txt) => {
        setSex(txt)
    }

    const getData = async () => {
        const sURL = routeApi.detail_karyawan;
        const params = {
            "nip": nip
        };
        const res = await ApiManager('post', params, sURL);
        let status = res.metadata.status,
            message = res.metadata.message,
            response = res.response;

        console.log(res, 'GET DATA');
        if (status == 200){
            setFullname(response.nama);
            setAddress(response.alamat);
            setSex(response.gender);

            let aDate = moment(response.tgl_lahir, 'DD-MM-YYYY').format('YYYY-MM-DD');
            setdate( new Date(aDate) );
        } else {

        }
    }
    

    useEffect( () => {
        getData();
        console.log('tag', tag);
    }, [])

    const changeDate = () => {
        DateTimePickerAndroid.open({
            mode: 'date',
            value: date,
            onChange: (event, selected_date) => {
                setdate(selected_date);
                console.log('changeDate', new Date(selected_date).toLocaleDateString() );
            }
        });
    }

    const changeFullname = (txt) => {
        setFullname(txt);
    }
    const changeAddress = (txt) => {
        setAddress(txt);
    }

    const addKaryawan = async () => {
        let sURL = tag == 'edit' ? routeApi.update_karyawan : routeApi.add_karyawan;
        let params = {
            "nama": fullname,
            "alamat": address,
            "gender": sex,
            "tgl_lahir": moment(date).format('DD-MM-YYYY')
        };

        if (tag == 'edit'){
            params.nip = nip;
        }

        const res = await ApiManager('post', params, sURL);
        console.log(params, res, 'addKaryawan');
        let status = res.metadata.status,
        message = res.metadata.message,
        response = res.response;

        if(status === 200){
            navigation.replace('Home');
            MessageUtil.showSuccess('Berhasil disimpan');
        }
    }
    
  return (
    <View style={{ flex: 1}}>
        <Header label={'Form '+ tag} buttonBack={true} navigation={navigation} />
      <FormControl
        placeholder={'Full Name'}
        value={fullname}
        secureText={false}
        isSecure={false}
        changeValue={txt => changeFullname(txt)}
        changeSecure={() => {}}
      />

    <FormControl
            placeholder={'Address'}
            value={address}
            secureText={false}
            isSecure={false}
            changeValue={txt => changeAddress(txt)}
            changeSecure={() => {}}
        />

    <DropdownControl value={sex} setValue={ txt => changeSex(txt) } />

    <TouchableOpacity 
    style={{
        margin: 20,
        padding: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#black'
    }}
    onPress={ () => changeDate() }>
        <Text>{new Date(date).toLocaleDateString()}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
        margin: 20,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'blue',
    }}
    onPress={
    
        () =>  addKaryawan()
    }
    >
        <Text style={{
            color: 'white'
        }}>
            { tag == 'edit' ? 'Update' : 'Simpan' }
        </Text>
    </TouchableOpacity>
    </View>
  );
};

export default Form;
