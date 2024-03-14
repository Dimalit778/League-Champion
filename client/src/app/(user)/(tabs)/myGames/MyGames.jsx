import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const MyGames = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <View>
      <Text>MyGames</Text>
      <Text style={{ fontSize: 24 }}>{user?.name}</Text>
    </View>
  );
};

export default MyGames;
