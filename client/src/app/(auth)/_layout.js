import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" />
        <Stack.Screen name="hey" />
        <Stack.Screen name="Register" />
        <Stack.Screen name="Welcome" />
      </Stack>
    </>
  );
};

export default Layout;
