import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import 'core-js/stable/atob.js';
import { Redirect, useRouter } from 'expo-router';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setIsLoggedIn(false);
    router.replace('/Login');
  };

  const login = async (user) => {
    try {
      const { data } = await axios.post(
        'http://10.0.2.2:3000/auth/login',
        user
      );
      const token = JSON.stringify(data.token);
      getUser(token);
      AsyncStorage.setItem('token', token);
      const msg = { status: 'success', message: 'Login successful' };
      return msg;
    } catch (err) {
      const msg = { status: 'error', message: err.response.data.message };
      return msg;
    }
  };

  const register = async (user) => {
    try {
      await axios.post('http://10.0.2.2:3000/auth/Register', user);
      const msg = { status: 'success', message: 'User Created Successful' };
      return msg;
    } catch (err) {
      const msg = { status: 'error', message: err.response.data.message };
      return msg;
    }
  };

  const getUser = (token) => {
    console.log('Get User');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;
    console.log('user id', userId);
    axios
      .get(`http://10.0.2.2:3000/auth/getUser/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setUser(null);
        setUserToken(null);
        setIsLoggedIn(false);

        console.log('error', error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        setIsLoggedIn,
        register,
        login,
        logout,
        setUserToken,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// const decodedToken = jwtDecode(token);
// const userId = decodedToken.userId;
// console.log(userId);
// const { data } = axios.get(
//   `http://10.0.2.2:3000/auth/getUser/${userId}`
// );
// console.log('data ->', data.data);
// // setUser(JSON.stringify(data))
