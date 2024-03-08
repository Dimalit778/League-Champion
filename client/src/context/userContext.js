import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import 'core-js/stable/atob.js';
import { Redirect, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const fetchUser = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) return setIsAuth(false);
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;
    axios
      .get(`http://10.0.2.2:3000/auth/getUser/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
