import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import React from 'react';

import { useSelector } from 'react-redux';
import { Link, Stack, useRouter } from 'expo-router';
import COLORS from '../../../../constans/colors';

//@ ---> Leagues Page
const Leagues = () => {
  const { user } = useSelector((state) => state.user);
  const { name, email, leagues } = user;

  // ---> Map on League list function
  const showLeauges = () => {
    return leagues.map((item, index) => (
      <Text key={index} style={styles.listText}>
        {item.leagueName}
      </Text>
    ));
  };

  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'grey' }}>
      <Stack.Screen options={{ title: 'Leagues', headerShown: true }} />
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
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 30,
          gap: 20,
        }}
      >
        {showLeauges()}
      </View>

      {/* BUTTONS */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: 25,
        }}
      >
        {/* -- Create New League -- */}
        <Link href="/pages/CreateLeague">create new</Link>
      </View>
    </SafeAreaView>
  );
};

export default Leagues;
const styles = StyleSheet.create({
  listText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: COLORS.darkBlue,
    overflow: 'hidden',
    padding: 15,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 15,
    color: 'white',
    width: '60%',
  },
});
