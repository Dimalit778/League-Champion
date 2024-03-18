import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { CustomDrawerContent } from 'components/CoustomDrawer';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Drawer>
  );
}
