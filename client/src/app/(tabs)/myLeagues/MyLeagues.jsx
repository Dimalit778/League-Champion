import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Button from 'components/Button';
import COLORS from '../../../../constans/colors';
import { useSelector } from 'react-redux';

// const leagueTest = [
//   {
//     id: '1',
//     name: 'team',
//   },
//   {
//     id: '2',
//     name: 'team',
//   },
//   {
//     id: '3',
//     name: 'team',
//   },
// ];
const MyLeagues = () => {
  const { user } = useSelector((state) => state.user);
  const { name, email, leagues } = user;
  console.log(leagues);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
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
        <Button
          btnLabel="Join League"
          bgColor={COLORS.darkBlue}
          textColor={COLORS.white}
          textFont={16}
        />
        <Button
          btnLabel="Create New League"
          bgColor={COLORS.darkBlue}
          textColor={COLORS.white}
          textFont={16}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyLeagues;
