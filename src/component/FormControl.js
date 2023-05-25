import React from 'react';
import {Image} from '@rneui/base';
import {Input} from '@rneui/themed';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const FormControl = props => {
  return (
    <View style={style.containerInput}>
      <View style={style.containerGroup}>
        <Input
          placeholder={props.placeholder}
          value={props.value}
          inputStyle={style.inputStyle}
          containerStyle={style.customStyleInput}
          inputContainerStyle={style.inputCustomContainer}
          onChangeText={txt => {
            console.log('txt', txt);
            props.changeValue(txt);
          }}
          secureTextEntry={props.isSecure == true ? props.secureText : false}
        />
      </View>
      {props.isSecure && (
        <TouchableOpacity
          onPress={() => {
            props.changeSecure();
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1611162618828-bc409f073cbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
            }}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  containerInput: {
    backgroundColor: 'yellow',
    height: 55,
    justifyContent: 'center',
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingStart: 10,
    paddingEnd: 10,
    marginTop: 20,
    marginStart: 24,
    marginEnd: 24,
  },
  inputCustomContainer: {
    borderColor: 'transparent',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 14,
    color: 'black',
    textAlignVertical: 'center',
    // fontFamily: 'Arial',
  },
  customStyleInput: {
    height: 55,
  },
  containerGroup: {
    flex: 1,
  },
});

export default FormControl;
