import {Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ListData = props => {
  console.log(props, 'props');
  return (
    <View style={style.container}>
      <View
        style={[
          style.textContainer,
          {
            flex: 1.5,
          },
        ]}>
        <FontAwesome name="user-circle-o" size={50} />
      </View>

      <View
        style={[
          style.textContainer,
          {
            flex: 4,
          },
        ]}>
        <Text>NIP : {props.nip}</Text>
        <Text>Nama : {props.fullname}</Text>
        <Text>Alamat : {props.address}</Text>
        <Text>{props.sex}</Text>
      </View>

      <View
        style={[
          style.textContainer,
          {
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          },
        ]}>
        <TouchableOpacity style={style.actionButton} onPress={() => {
            props.onPress();
        }}>
          <FontAwesome name="edit" size={25} />
        </TouchableOpacity>

        <TouchableOpacity style={style.actionButton} onPress={() => {
            props.onDelete();
        }}>
          <FontAwesome name="trash-o" size={25} />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    marginStart: 20,
    marginEnd: 20,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
  },
  textContainer: {
    padding: 10,
  },
  actionButton:{
    margin:10
  }
});

export default ListData;
