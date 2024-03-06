import { View, Text, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import Button from 'components/Button';
const Home = () => {
  const { user, logout } = useContext(AppContext);

  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 24 }}>Homeeeeeeeeee</Text>
        <Text style={{ fontSize: 24 }}>{user?.name}</Text>
        <Text style={{ fontSize: 24 }}>{user?.email}</Text>
        <Text style={{ fontSize: 24 }}>{user?.leagues}</Text>
      </View>
      <View>
        <Button btnLabel="Logout" Press={logout} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
