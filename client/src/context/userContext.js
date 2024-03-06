import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import 'core-js/stable/atob.js';
import { useRouter } from 'expo-router';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // const router = useRouter();
  const [user, setUser] = useState();
  setUser('dima');
  const [isAuth, setIsAuth] = useState(false);

  return (
    <UserContext.Provider value={[user, isAuth]}>
      {children}
    </UserContext.Provider>
  );
};
// useEffect(() => {
//   const fetchUser = async () => {
//     const token = await AsyncStorage.getItem('auth');
//     const decodedToken = jwtDecode(token);
//     const userId = decodedToken.userId;
//     console.log('userId');
//     if (!userId) setIsAuth(false);
//     axios
//       .get(`http://10.0.2.2:3000/auth/getUser/${userId}`, {
//         //   responseType: 'json',
//       })
//       .then((response) => {
//         //   const data = JSON.parse(response.data);
//         console.log(response.data);
//         // setUserData(response.data);
//         //   if (response.status === 200) {

//         // setUser(response.data);
//         // setIsAuth(true);
//         //   }
//       });
//   };
//   fetchUser();
//   // if (isAuth) router.replace('(auth/Welcome');
// }, []);
