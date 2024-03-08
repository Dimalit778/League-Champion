import { View, Text, SafeAreaView } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { AppContext, useAuth } from 'context/AuthContext';
import Button from 'components/Button';
import { useRouter } from 'expo-router';
const Home = () => {
  const router = useRouter();
  const { logout, user } = useAuth();
  // console.log('tabs home page ');
  // useEffect(() => {
  //   if (user?.leagues.length == 0) {
  //     router.replace('/MyLeagues');
  //   }
  // }, [user]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
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
