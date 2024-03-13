import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';

import Button from 'components/Button';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
// import { useGetUserQuery } from 'redux/services/userApi';
import { logoutUser } from 'redux/slices/authSlice';
const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  console.log('Home - ', user);
  const logout = () => {
    try {
      dispatch(logoutUser());
      router.replace('Welcome');
    } catch (err) {
      console.log('error -> ', err);
    }
  };
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
