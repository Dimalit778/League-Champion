import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

BASE_ANDROID_URL = 'http://10.0.2.2:3000';
BASE_ISO_URL = 'http://localhost:3000';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const register = async (userData) => {
    const { name, lastName, email, password } = userData;
    axios
      .post(`${BASE_ANDROID_URL}/auth/register`, {
        name,
        lastName,
        email,
        password,
      })
      .then((response) => {
        let userInfo = response.data;
        setUser(userInfo);
        setIsAuth(true);
        AsyncStorage.setItem('user', JSON.stringify(userInfo));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  //   //@   LOGIN
  const login = async (email, password) => {
    axios
      .post(`${BASE_ANDROID_URL}/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        let userInfo = response.data;
        setUser(userInfo);
        setIsAuth(true);
        AsyncStorage.setItem('user', JSON.stringify(userInfo));
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    return error.response.data;
  };

  const logout = async () => {
    setUser(null);
    setIsAuth(false);
    AsyncStorage.removeItem('user');
  };

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('user');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUser(userInfo);
        setIsAuth(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuth, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useAuth must be wrapped inside AuthContextProvider');
  }
  return value;
};
