import { Stack } from 'expo-router';
import React from 'react';

const Layout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" />
      </Stack>
    </>
  );
};

export default Layout;
