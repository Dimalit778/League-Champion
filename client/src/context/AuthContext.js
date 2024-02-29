import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const val = 'dima';
  return (
    <AuthContext.Provider value={{ val }}>{children}</AuthContext.Provider>
  );
};

// const [isLoading, setItLoading] = useState(false);
//   const [user, setUser] = useState(null);
//   //@   LOGIN
//   const login = (email, password) => {
//     axios
//       .post('http://localhost:3000/auth/login', {
//         email,
//         password,
//       })
//       .then((res) => {
//         let user = res.data;
//         console.log(user);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     setItLoading(true);
//     setUser(JSON.stringify(user));
//     AsyncStorage.setItem('user', user);
//     setItLoading(false);
//   };
//   //@   REGISTER
//   const register = (name, lastName, email, password, confirmPassword) => {
//     if (!confirmPassword === password) {
//       return Alert.alert('Password not match');
//     }
//     setItLoading(true);
//     axios
//       .post('http://localhost:3000/auth/register', {
//         name,
//         lastName,
//         email,
//         password,
//       })
//       .then((res) => {
//         let userInfo = res.data;
//         setUser(userInfo);
//         AsyncStorage.setItem('user', JSON.stringify(user));
//         setItLoading(false);
//         initialState();
//       })
//       .catch((err) => {
//         Alert.alert('Registration failed');
//         console.log(err);
//         setItLoading(false);
//       });
//   };

//   const logout = () => {
//     setItLoading(true);
//     setUser(null);
//     AsyncStorage.removeItem('user');
//     setItLoading(false);
//   };

//   const isLoggedIn = async () => {
//     try {
//       setItLoading(true);
//       let user = await AsyncStorage.getItem('user');
//       setUser(user);
//       setItLoading(false);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   useEffect(() => {
//     isLoggedIn();
//   }, []);
