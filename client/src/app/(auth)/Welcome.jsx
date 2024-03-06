import { useRouter } from 'expo-router';

import Button from '../../components/Button';
import COLORS from '../../../constans/colors';
import homeImg from '../../../assets/images/HomeImg.png';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
//imports for JWT
import { jwtDecode } from 'jwt-decode';
import 'core-js/stable/atob.js';

const Welcome = () => {
  router = useRouter();

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem('auth');
  //       if (token) {
  //         router.replace('/(tabs)/home');
  //       }
  //     } catch (error) {
  //       console.log('Error', error);
  //     }
  //   };
  //   checkLoginStatus();
  // }, []);

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
            Press={() => router.replace('/(auth)/Login')}
          />
          <Button
            btnLabel="Sign Up"
            bgColor={COLORS.darkBlue}
            textColor={COLORS.white}
            Press={() => router.replace('Register')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default Welcome;
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
