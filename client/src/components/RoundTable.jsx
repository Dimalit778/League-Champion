import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import React from 'react';
// import { SvgUri } from 'react-native-svg';
import { DisplayImage } from './DisplayImage';

export const RoundTable = ({ round }) => {
  return (
    <View style={styles.container}>
      {/* --- > HOME Team  < ---*/}
      <View style={styles.tableTeams}>
        <Text style={styles.text}> {round.homeTeam.shortName}</Text>
        <DisplayImage url={round.homeTeam.crest} />
      </View>
      {/* --- > GAME SCORE  < ---*/}
      <View style={styles.tableScore}>
        <Text style={styles.scoreText}> {round.score.fullTime.home}</Text>
        <Text style={styles.scoreText}> - </Text>
        <Text style={styles.scoreText}>{round.score.fullTime.away}</Text>
      </View>

      <View style={styles.tableTeams}>
        <DisplayImage url={round.awayTeam.crest} />
        <Text style={styles.text}>{round.awayTeam.shortName}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 4,
    marginTop: 8,
  },
  tableTeams: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableScore: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '20%',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    // paddingVertical: 8,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
