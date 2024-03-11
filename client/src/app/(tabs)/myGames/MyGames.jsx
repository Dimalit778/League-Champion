import { View, Text } from 'react-native';
import React from 'react';
import { useAuth } from 'context/AuthContext';

const MyGames = () => {
  const { user } = useAuth();
  console.log('MY GAMES ==> ', user);
  return (
    <View>
      <Text>MyGames</Text>
    </View>
  );
};

export default MyGames;
