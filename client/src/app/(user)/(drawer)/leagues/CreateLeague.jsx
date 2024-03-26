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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grey }}>
      <Stack.Screen
        options={{
          title: 'New League',
        }}
      />
      <View style={styles.container}>
        <Text style={styles.textHeader}>Create New League</Text>

        <View style={styles.leagueBox}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Choose League</Text>
          <FlatList
            data={countryFlags}
            keyExtractor={(item) => item.code}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => setLeagueCode(item.code)}>
                <View style={styles.flag}>
                  <SvgUri width="80" height="80" uri={item.flag} />
                  <Text>{item.name}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateLeague;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    margin: 30,
    borderWidth: 3,
    borderColor: COLORS.grey,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 15,
  },
  leagueBox: {
    backgroundColor: 'black',
  },

  flag: {
    width: 100,
    height: 100,
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});
