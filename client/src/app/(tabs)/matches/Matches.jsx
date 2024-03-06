import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { UserContext } from 'context/userContext';

const Matches = () => {
  // const { userData } = useContext(UserContext);
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Matches</Text>
      {/* <Text style={{ fontSize: 24 }}>{userData?.name}</Text> */}
    </View>
  );
};

export default Matches;
