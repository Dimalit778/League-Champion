import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';

import Button from 'components/Button';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
// import { useGetUserQuery } from 'redux/services/userApi';
import { logoutUser } from 'redux/slices/authSlice';
import axios from 'axios';

//@ ---> Home Page
const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const logout = () => {
    try {
      dispatch(logoutUser());
      router.replace('Welcome');
    } catch (err) {
      console.log('error -> ', err);
    }
  };
  const data = async () => {
    try {
      const res = await axios.get('http://10.100.102.24:3000/auth/getAll');
      console.log(res.data);
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
      </View>
      <View>
        <Button btnLabel="Logout" Press={logout} />
        <Button btnLabel="fetchdata" Press={data} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
