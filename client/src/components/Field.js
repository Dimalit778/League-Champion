import { View, Text, TextInput } from 'react-native';
import React from 'react';
import COLORS from '../../constans/colors';
const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: COLORS.darkBlue,
        paddingHorizontal: 10,
        width: '90%',
        backgroundColor: 'rgb(220,220, 220)',
        marginVertical: 10,
        fontSize: 18,
        padding: 15,
      }}
      placeholderTextColor={COLORS.darkBlue}
    ></TextInput>
  );
};

export default Field;
