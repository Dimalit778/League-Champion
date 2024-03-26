import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import COLORS from '../../../../../constans/colors';
import { DrawerToggleButton } from '@react-navigation/drawer';

const LeaguesLayout = () => {
  return (
    <Stack
      screenOptions={{
        title: 'Leagues',
        headerStyle: { backgroundColor: COLORS.tabsColor },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
    />
  );
};

export default LeaguesLayout;
