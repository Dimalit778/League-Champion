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
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
  router = useRouter();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      router.replace('Login');
    } else {
      router.replace('(tabs)/home');
    }
  }, []);

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
