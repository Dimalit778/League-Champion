import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import homeImg from '../../assets/images/HomeImg.png';
const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground source={homeImg} style={{ height: '100%' }}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Background;
