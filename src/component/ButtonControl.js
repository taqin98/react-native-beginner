import React from 'react';
import {Button, Text} from '@rneui/base';
import {View, Touchable, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonControl = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={[
        style.container,
        {
          marginStart: props.marginStart,
          marginEnd: props.marginEnd,
          backgroundColor: props.backgroundColor,
        },
      ]}>
      <Text
        style={[
          style.text,
          {
            color: props.textColor,
            fontSize: props.fontSize,
          },
        ]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default ButtonControl;
