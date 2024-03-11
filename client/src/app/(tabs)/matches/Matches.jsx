import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { useAuth } from 'context/AuthContext';

const Matches = () => {
  const { user } = useAuth();

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
