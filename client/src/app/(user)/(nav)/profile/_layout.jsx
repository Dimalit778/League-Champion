import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return <Stack name="Profile" screenOptions={{ headerShown: false }} />;
};

export default Layout;
