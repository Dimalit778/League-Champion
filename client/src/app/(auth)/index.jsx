import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import homeImg from '../../../assets/images/HomeImg.png';

import { Link, useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import Button from '../../components/Button';
import COLORS from '../../../constans/colors';

const index = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={homeImg} style={styles.image}>
        {/* BOX Header */}
        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>League Champion</Text>
        </View>
        {/* BOX Section */}
        <View style={styles.boxSection}>
          <Text style={styles.textHeader}>SECTION</Text>
        </View>
        {/* BOX Buttons */}
        <View style={{ marginHorizontal: 20 }}>
          <Button
            btnLabel="Login"
            bgColor={COLORS.darkBlue}
            textColor={COLORS.white}
            Press={() => router.push('/(auth)/Login')}
          />
          <Button
            btnLabel="Sign Up"
            bgColor={COLORS.darkBlue}
            textColor={COLORS.white}
            Press={() => router.push('/(auth)/Register')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  boxHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '25%',
  },
  textHeader: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'grey',
  },
  boxSection: {
    height: '40%',
  },
});
