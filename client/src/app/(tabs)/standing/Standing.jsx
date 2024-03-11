import { View, Text } from 'react-native';
import React from 'react';
import { useAuth } from 'context/AuthContext';

const Standing = () => {
  // const { user } = useAuth();
  // console.log('STANDING ==> ', user);
  return (
    <View>
      <Text>Standing</Text>
    </View>
  );
};

export default Standing;
