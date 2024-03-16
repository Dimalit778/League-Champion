import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

//@ ---> Matches Page
const Matches = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24 }}>Matches</Text>
      <Text style={{ fontSize: 24 }}>{user?.name}</Text>
      <Text style={{ fontSize: 24 }}>{user?.email}</Text>
      <Text style={{ fontSize: 24 }}>{user?.leagues}</Text>
    </SafeAreaView>
  );
};

export default Matches;
