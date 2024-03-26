import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';

export const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{ headerShown: false, swipeEdgeWidth: 0 }}>
      <Drawer.Screen name="(tabs)" />
      <Drawer.Screen name="leagues" />
      <Drawer.Screen name="profile" />
      <Drawer.Screen name="settings" />
    </Drawer>
  );
};
