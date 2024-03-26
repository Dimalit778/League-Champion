import { SvgUri } from 'react-native-svg';
import { View, Image } from 'react-native';

import React from 'react';
// GET Url image Svg or Png and show the Image
export const DisplayImage = ({ url }) => {
  return (
    <View>
      {url.endsWith('.svg') ? (
        <SvgUri width="27" height="27" uri={url} />
      ) : (
        <Image style={{ width: 27, height: 27 }} source={{ uri: url }} />
      )}
    </View>
  );
};
