import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Button from 'components/Button';

import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';
import COLORS from '../../../../../constans/colors';

//@ ---> Leagues Page
const Leagues = () => {
  const { user } = useSelector((state) => state.user);
  const { name, email, leagues } = user;
  console.log(leagues);

  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* HEADER */}
      <View
        style={{
          height: '25%',
          backgroundColor: 'grey',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 32, textAlign: 'center' }}>My Leagues</Text>
      </View>
      {/* LEAGUES LIST */}
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        {/* LIST */}
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {leagues?.length > 0 ? (
            leagues.map((leg) => {
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {leg.name}
              </Text>;
            })
          ) : (
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>No Leagues</Text>
          )}
        </View>
      </View>
      {/* BUTTONS */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: 25,
        }}
      >
        {/* -- Join League -- */}
        <Button
          btnLabel="Join League"
          bgColor={COLORS.darkBlue}
          textColor={COLORS.white}
          textFont={16}
          Press={() => router.push('JoinLeague')}
        />
        {/* -- Create New League -- */}
        <Button
          btnLabel="Create New League"
          bgColor={COLORS.darkBlue}
          textColor={COLORS.white}
          textFont={16}
          Press={() => router.push('/CreateLeague')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Leagues;
