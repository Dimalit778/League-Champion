import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';
import COLORS from '../../../../../constans/colors';

const ProfileLayout = () => {
  return (
    <Stack
      screenOptions={{
        title: 'Profile',

        headerLeft: () => <DrawerToggleButton tintColor="white" />,
        headerStyle: { backgroundColor: COLORS.tabsColor },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
    />
  );
};

export default ProfileLayout;
