import { Stack, Tabs } from 'expo-router';
import React from 'react';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="MyLeagues" options={{ headerShown: false }} />
      <Tabs.Screen name="AddLeague" />
    </Tabs>
  );
};

export default Layout;
