import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="profile" />
      <Stack.Screen name="settings" />
    </Stack>
  );
};

export default _layout;
