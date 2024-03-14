import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';

const Standing = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Drawer.Screen
        options={{
          title: 'Standing',
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
    </>
  );
};

export default Standing;
