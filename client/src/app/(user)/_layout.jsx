import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { CustomDrawerContent } from 'components/CoustomDrawer';
import COLORS from '../../../constans/colors';

const Layout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default Layout;
