import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { AuthProvider } from '../../context/AuthContext';

const _layout = () => {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Login" />
        <Stack.Screen name="Register" />
      </Stack>
    </AuthProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
