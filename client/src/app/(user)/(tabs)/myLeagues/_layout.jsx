import { Stack, Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Button } from 'react-native';

//@ ---> myLeagues Layout
const Layout = () => {
  const router = useRouter();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Back',
        }}
      />
      <Stack.Screen
        name="Add"
        options={{
          headerShown: true,
          title: ' Create New League',
          headerLeft: () => (
            <Button
              title="Close"
              onPress={() => {
                router.back();
              }}
            />
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
