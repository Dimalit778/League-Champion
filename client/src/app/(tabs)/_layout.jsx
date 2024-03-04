import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import React from 'react';

const index = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="eye" size={24} color="black" />
            ) : (
              <Feather name="eye" size={24} color="grey" />
            ),
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Matches',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="eye" size={24} color="black" />
            ) : (
              <Feather name="eye" size={24} color="grey" />
            ),
        }}
      />
      <Tabs.Screen
        name="standing"
        options={{
          title: 'Standing',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="eye" size={24} color="black" />
            ) : (
              <Feather name="eye" size={24} color="grey" />
            ),
        }}
      />
      <Tabs.Screen
        name="myGames"
        options={{
          title: 'My Games',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="eye" size={24} color="black" />
            ) : (
              <Feather name="eye" size={24} color="grey" />
            ),
        }}
      />
    </Tabs>
  );
};

export default index;
