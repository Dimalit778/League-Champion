import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import COLORS from '../../../../../constans/colors';
import { DrawerToggleButton } from '@react-navigation/drawer';

const SettingLayout = () => {
  return (
    <Stack
      screenOptions={{
        title: 'Setting',
        headerLeft: () => <DrawerToggleButton tintColor="white" />,
        headerStyle: { backgroundColor: COLORS.tabsColor },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
    />
  );
};

export default SettingLayout;
