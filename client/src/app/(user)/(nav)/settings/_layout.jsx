import { View, Text, Button } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';

const Layout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        title: 'Settings',
        headerLeft: () => <Button title="Back" />,
      }}
    >
      <Stack.Screen name="settings" />
    </Stack>
  );
};

export default Layout;
