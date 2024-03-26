import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

//@ ---> MyGames Page
const MyGames = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <SafeAreaView>
      <Text>MyGames</Text>
      <Text style={{ fontSize: 24 }}>{user?.name}</Text>
    </SafeAreaView>
  );
};

export default MyGames;
