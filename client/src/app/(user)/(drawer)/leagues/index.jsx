import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';

import { useSelector } from 'react-redux';
import { Link, Stack } from 'expo-router';

import { ShowLeauges } from 'components/ShowLeaguesList';
import { DrawerToggleButton } from '@react-navigation/drawer';
import COLORS from '../../../../../constans/colors';

//@ ---> Leagues Page
const Leagues = () => {
  const { user } = useSelector((state) => state.user);
  const { name, email, leagues } = user;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grey }}>
      <Stack.Screen
        options={{
          headerLeft: () => <DrawerToggleButton tintColor="white" />,
        }}
      />

      {/* HEADER */}
      <View
        style={{
          height: '25%',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 32, textAlign: 'center' }}>My Leagues</Text>
      </View>
      {/* LEAGUES LIST */}
      <View style={{ height: '40%' }}>
        <FlatList
          data={leagues}
          renderItem={({ item }) => <ShowLeauges league={item} />}
        />
      </View>
      {/* BUTTONS */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        {/* -- Link to Join League  -- */}
        <Link href="leagues/Join" asChild>
          <TouchableOpacity style={styles.linkBox}>
            <Text style={styles.linkText}>Join League</Text>
          </TouchableOpacity>
        </Link>

        {/* -- Link to Create League  -- */}
        <Link href="leagues/CreateLeague" asChild>
          <Pressable style={styles.linkBox}>
            <Text style={styles.linkText}>Create League</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Leagues;

const styles = StyleSheet.create({
  linkText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gold',
  },
  linkBox: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
});
