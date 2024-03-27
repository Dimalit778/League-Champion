import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import COLORS from '../../../../../constans/colors';
import { countryFlags } from 'components/countryFlags';
import { SvgUri } from 'react-native-svg';

const CreateLeague = () => {
  const [leagueCode, setLeagueCode] = useState(null);
  console.log(leagueCode);
  const router = useRouter();

  const [selected, setSelected] = useState(false);
  const flagSelected = () => {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grey }}>
      <Stack.Screen
        options={{
          title: 'New League',
        }}
      />
      <View style={styles.container}>
        <Text style={styles.textHeader}>Create New League</Text>
        <View style={{ flex: 1, flexDirection: 'row', gap: 5 }}>
          <View style={styles.leagueBox}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
              }}
            >
              Choose League
            </Text>
            <FlatList
              data={countryFlags}
              keyExtractor={(item) => item.code}
              renderItem={({ item, index }) => (
                <Pressable
                  onPress={() => {
                    setLeagueCode(item.code), 
                    // setSelected(!selected); לא עובד
                  }}
                >
                  <View
                    style={[
                      styles.flag,
                      {
                        backgroundColor: selected == true ? 'white' : 'black',
                      },
                    ]}
                  >
                    <SvgUri width="100%" height="90" uri={item.flag} />
                    <Text style={styles.flagText}>{item.name}</Text>
                  </View>
                </Pressable>
              )}
            />
          </View>
          <View style={{ flex: 1, backgroundColor: 'green' }}>
            <Text>form</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateLeague;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 15,
  },
  leagueBox: {},

  flag: {
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
  flagText: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 5,
  },
  // selected: {
  //   marginHorizontal: 10,
  //   marginTop: 10,
  //   paddingHorizontal: 10,
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   borderColor: 'black',
  //   backgroundColor: 'grey',
  // },
});
