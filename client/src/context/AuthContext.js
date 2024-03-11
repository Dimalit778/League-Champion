import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import 'core-js/stable/atob.js';
import { Redirect, useRouter } from 'expo-router';

ISO_URL = 'http://localhost:3000/auth';
ANDROID_URL = 'http://10.0.2.2:3000/auth';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const router = useRouter();

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setUser(null);
    router.replace('/Login');
  };

  // const login = async (user) => {
  //   try {
  //     const { data } = await axios.post(`${ANDROID_URL}/login`, user);
  //     const token = JSON.stringify(data.token);
  //     AsyncStorage.setItem('token', token);
  //     const msg = { status: 'success', message: 'Login successful' };
  //     return msg;
  //   } catch (err) {
  //     const msg = { status: 'error', message: err.response.data.message };
  //     return msg;
  //   }
  // };

  // const register = async (user) => {
  //   try {
  //     await axios.post(`${ANDROID_URL}/register`, user);
  //     const msg = { status: 'success', message: 'User Created Successful' };
  //     return msg;
  //   } catch (err) {
  //     const msg = { status: 'error', message: err.response.data.message };
  //     return msg;
  //   }
  // };

  // const fetchUser = async () => {
  //   const token = await AsyncStorage.getItem('token');
  //   const decodedToken = jwtDecode(token);
  //   const userId = decodedToken.userId;
  //   axios
  //     .get(`${ANDROID_URL}/getUser/${userId}`)
  //     .then((response) => {
  //       setUser(response.data);
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.log('error ', user);
  //       setUser(null);
  //       setUserToken(null);
  //     });
  // };

  // useEffect(() => {
  //   console.log('effect');
  //   const fetch = async () => {
  //     const user = await AsyncStorage.getItem('user');
  //     const token = await AsyncStorage.getItem('token');
  //     console.log('user -> ', user);
  //     console.log('token -> ', token);
  //   };
  //   fetch();
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
