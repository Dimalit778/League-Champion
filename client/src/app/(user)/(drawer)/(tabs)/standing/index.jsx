import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

//@ ---> Standing Page
const Standing = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <SafeAreaView>
      <Text>Standing</Text>
      <Text style={{ fontSize: 24 }}>{user?.name}</Text>
    </SafeAreaView>
  );
};

export default Standing;
