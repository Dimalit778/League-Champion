import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ bgColor, btnLabel, textColor, Press, textFont }) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        padding: 10,
        marginVertical: 10,
      }}
    >
      <Text
        style={{ color: textColor, fontSize: textFont, fontWeight: 'bold' }}
      >
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
