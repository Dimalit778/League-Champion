import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { CustomDrawerContent } from 'components/CoustomDrawer';
import COLORS from '../../../constans/colors';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: COLORS.tabsColor },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        screenOptions={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="(drawer)/Profile"
        options={{ headerShown: true, title: 'Profile' }}
      />
      <Drawer.Screen
        name="(drawer)/Leagues"
        options={{ headerShown: true, title: 'Leagues' }}
      />
      <Drawer.Screen
        name="(drawer)/Settings"
        options={{ headerShown: true, title: 'Settings' }}
      />
    </Drawer>
  );
}
