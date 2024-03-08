import { useRouter } from 'expo-router';
import homeImg from '../../../assets/images/HomeImg.png';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SpinnerAnimation from 'components/SpinnerAnimation';
import { useAuth } from 'context/AuthContext';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = () => {
  router = useRouter();

  const { isLoggedIn, setIsLoggedIn, getUser } = useAuth();
  console.log('welcome ', isLoggedIn);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      if (token) {
        setIsLoggedIn(true);
        getUser(token);
        router.replace('(tabs)/home');
      } else {
        setIsLoggedIn(false);
        router.replace('Login');
      }
    };
    setTimeout(() => {
      checkAuth();
    }, 1500);
  }, [isLoggedIn]);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 25 }}>
      <ImageBackground source={homeImg} style={styles.image}>
        <View style={{ flex: 1 }}>
          {/* BOX Header */}
          <View style={styles.boxHeader}>
            <Text style={styles.textHeader}>League Champion</Text>
          </View>

          {/* BOX Section */}
          <View style={styles.boxSection}>
            <Text style={styles.textHeader}>SECTION</Text>
            <SpinnerAnimation />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
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
    flex: 1,
  },
});