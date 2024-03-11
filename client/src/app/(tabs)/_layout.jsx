import { Feather } from '@expo/vector-icons';
import { jwtDecode } from 'jwt-decode';
import 'core-js/stable/atob.js';
// ICONS
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Tabs, useRouter } from 'expo-router';

import React, { useContext, useEffect } from 'react';
import COLORS from '../../../constans/colors';
import { useSelector } from 'react-redux';

const Layout = () => {
  const { token } = useSelector((state) => state.auth);
  console.log('home -> ', token);
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
          backgroundColor: COLORS.tabsColor,
        },
        tabBarLabelStyle: {
          color: COLORS.grey,
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      {/* --> MY LEAGUES SCREEN <-- */}
      <Tabs.Screen
        name="myLeagues"
        options={{
          title: 'My Leagues',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome6
                name="users-between-lines"
                size={36}
                color={COLORS.white}
              />
            ) : (
              <FontAwesome6
                name="users-between-lines"
                size={24}
                color={COLORS.grey}
              />
            ),
        }}
      />
      {/* --> MATCHES SCREEN <-- */}
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Matches',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="football-outline"
                size={38}
                color={COLORS.white}
                usermy
              />
            ) : (
              <Ionicons name="football-outline" size={28} color={COLORS.grey} />
            ),
        }}
      />
      {/* --> HOME SCREEN <-- */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="home" size={42} color={COLORS.white} />
            ) : (
              <FontAwesome name="home" size={32} color={COLORS.grey} />
            ),
        }}
      />
      {/* --> STANDING SCREEN <-- */}
      <Tabs.Screen
        name="standing"
        options={{
          title: 'Standing',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SimpleLineIcons name="chart" size={36} color={COLORS.white} />
            ) : (
              <SimpleLineIcons name="chart" size={28} color={COLORS.grey} />
            ),
        }}
      />
      {/* --> MY GAMES SCREEN <-- */}
      <Tabs.Screen
        name="myGames"
        options={{
          title: 'My Games',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="target-account"
                size={36}
                color={COLORS.white}
              />
            ) : (
              <MaterialCommunityIcons
                name="target-account"
                size={28}
                color={COLORS.grey}
              />
            ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
