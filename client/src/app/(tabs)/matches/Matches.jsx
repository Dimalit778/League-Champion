import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const Matches = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Matches</Text>

      <Text style={{ fontSize: 24 }}>{user?.name}</Text>
      <Text style={{ fontSize: 24 }}>{user?.email}</Text>
      <Text style={{ fontSize: 24 }}>{user?.leagues}</Text>
    </View>
  );
};

export default Matches;
