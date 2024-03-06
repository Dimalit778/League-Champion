import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import 'core-js/stable/atob.js';
import { Redirect, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();

  const isLoggedIn = () => {
    if (!isAuth) return <Redirect href="(auth)/Welcome" />;
    if (isAuth) return <Redirect href="(tabs)/Home" />;
  };

  const logout = async () => {
    AsyncStorage.removeItem('auth');
    setUser(null);
    setIsAuth(false);
  };
  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('auth');
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
    fetchUser();
    isLoggedIn();
  }, []);

  return (
    <AppContext.Provider value={{ isAuth, user, logout, isLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
