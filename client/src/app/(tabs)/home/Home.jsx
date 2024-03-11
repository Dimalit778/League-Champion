import { View, Text, SafeAreaView } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useAuth } from 'context/AuthContext';
import Button from 'components/Button';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { logout } = useSelector((state) => state.auth);
  // console.log('tabs home page ');
  // useEffect(() => {
  //   if (user?.leagues.length == 0) {
  //     router.replace('/MyLeagues');
  //   }
  // }, [user]);
  const logoutUser = () => {
    dispatch(logout);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 24 }}>Homeeeeeeeeee</Text>
        {/* <Text style={{ fontSize: 24 }}>{user?.name}</Text>
        <Text style={{ fontSize: 24 }}>{user?.email}</Text>
        <Text style={{ fontSize: 24 }}>{user?.leagues}</Text> */}
      </View>
      <View>
        <Button btnLabel="Logout" Press={logoutUser} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
