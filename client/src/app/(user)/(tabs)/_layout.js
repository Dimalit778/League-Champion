// ICONS
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Stack, Tabs } from 'expo-router';

import React, { useEffect } from 'react';
import COLORS from '../../../../constans/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/slices/userSlice';
import { DrawerToggleButton } from '@react-navigation/drawer';

const TabsLayout = () => {
  // const { token } = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   try {
  //     dispatch(getUser(token));
  //     console.log('Found user data');
  //   } catch (err) {
  //     console.log('error: ' + err);
  //   }
  // }, []);

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor="white" />,

        tabBarStyle: {
          backgroundColor: COLORS.tabsColor,
        },
        // -- > BOTTOM TABS
        tabBarLabelStyle: {
          color: COLORS.grey,
          fontSize: 12,
          fontWeight: 'bold',
        },
        // // -- > TOP NAV
        headerStyle: { backgroundColor: COLORS.tabsColor },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
    >
      {/*//@ --> MATCHES SCREEN <-- */}
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Matches',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="football-outline" size={32} color={COLORS.gold} />
            ) : (
              <Ionicons name="football-outline" size={28} color={COLORS.grey} />
            ),
        }}
      />
      {/*//@ --> HOME SCREEN <-- */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="home" size={32} color={COLORS.gold} />
            ) : (
              <FontAwesome name="home" size={28} color={COLORS.grey} />
            ),
        }}
      />
      {/*//@ --> STANDING SCREEN <-- */}
      <Tabs.Screen
        name="standing"
        options={{
          title: 'Standing',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SimpleLineIcons name="chart" size={30} color={COLORS.gold} />
            ) : (
              <SimpleLineIcons name="chart" size={28} color={COLORS.grey} />
            ),
        }}
      />
      {/*//@ --> MY GAMES SCREEN <-- */}
      <Tabs.Screen
        name="myGames"
        options={{
          title: 'My Games',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="target-account"
                size={32}
                color={COLORS.gold}
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

export default TabsLayout;
