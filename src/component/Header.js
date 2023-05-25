import {Text} from '@rneui/base';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = props => {
  return (
    <View style={style.container}>
      <View
        style={{
          margin: 10,
          flex: 1,
          flexDirection: "row",
          alignItems: 'center',
        }}>
        {
          props.buttonBack && 
          <TouchableOpacity style={{
              marginRight: 20
          }} onPress={
              () =>  { props.navigation.goBack() }
          }>
              <FontAwesome sty name="arrow-left" size={30} />
          </TouchableOpacity>
        }
        
        <Text style={[style.textContainer, { flex : props.buttonLogout ? 1 : 0.5 }]}>{props.label}</Text>

        {
          props.buttonLogout && 
          <TouchableOpacity style={{
              marginRight: 20
          }} onPress={
              () =>  { props.clickLogout() }
          }>
              <FontAwesome sty name="arrow-left" size={30} />
          </TouchableOpacity>
        }
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 55,
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 0,
    backgroundColor: "green",
  },
  textContainer: {
    color: "white",
  },
});

export default Header;
