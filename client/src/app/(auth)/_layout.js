import React, { useContext } from 'react';
import { Redirect, Stack } from 'expo-router';
import { AppContext } from 'context/AppContext';

const Layout = () => {
  const { user } = useContext(AppContext);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" />
        <Stack.Screen name="Register" />
        <Stack.Screen name="Welcome" />
      </Stack>
    </>
  );
};

export default Layout;
