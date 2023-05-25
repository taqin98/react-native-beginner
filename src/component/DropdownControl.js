import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownControl = props => {
    const [open, setOpen] = useState(false);
  const aList = [
    {label: 'Laki-Laki', value: 'L'},
    {label: 'Perempuan', value: 'P'},
  ];
  return (
    <View style={style.container}>
      <DropDownPicker items={aList} 
      value={props.value}
      setValue={ txt => props.setValue(txt) }
      open={open} 
      setOpen={setOpen} 
        style={style.dropdownStyle}
        dropDownContainerStyle={style.dropdownStyle}
      />
    </View>
  );
};

const style = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: 'yellow',
        zIndex: 999
    },
    dropdownStyle: {
        backgroundColor: 'yellow',
        borderColor: 'transparent'
    },
})

export default DropdownControl;
