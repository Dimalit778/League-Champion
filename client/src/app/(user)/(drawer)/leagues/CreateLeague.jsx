import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Pressable,
  TouchableOpacity,
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

  // const [selected, setSelected] = useState(false);
  // const flagSelected = () => {};
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
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                paddingHorizontal: 5,
              }}
            >
              Choose League
            </Text>
            <FlatList
              data={countryFlags}
              keyExtractor={(item) => item.code.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    setLeagueCode(item.code);
                  }}
                >
                  <View
                    style={
                      item.code === leagueCode ? styles.selected : styles.flag
                    }
                  >
                    <SvgUri width="110" height="80" uri={item.flag} />
                    <Text style={styles.flagText}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
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

  flag: {
    margin: 10,
    alignItems: 'center',
    // borderWidth: 2,
    borderRadius: 5,
    borderColor: COLORS.darkBlue,
  },
  flagText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selected: {
    margin: 10,
    alignItems: 'center',
    // borderWidth: 2,
    borderRadius: 5,
    borderColor: 'gold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    // shadowRadius: 16.0,

    elevation: {
      elevation: 50,
      shadowColor: '#52006A',
    },
  },
});
