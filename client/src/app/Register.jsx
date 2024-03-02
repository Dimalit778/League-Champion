import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../../constans/colors';
import React, { useState } from 'react';
import Button from '../components/Button';
import { useRouter } from 'expo-router';
import Spinner from 'react-native-loading-spinner-overlay';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Background from '../components/Background';

import CustomKeyboardView from 'components/CustomKeyboardView';
import { useAuth } from 'context/authContext';
import Toast from 'react-native-toast-message';

const Register = () => {
  // const [isPasswordShown, setIsPasswordShown] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);
  const { register } = useAuth();
  router = useRouter();

  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // -->  REGISTER Function
  const handleRegister = async () => {
    const { name, lastName, email, password } = userData;
    if (!name || !lastName || !email || !password || !confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Missing Fields',
        visibilityTime: 3000,
      });
      return;
    }
    if (confirmPassword !== password) {
      Toast.show({
        type: 'error',
        text1: 'Passwords do not match',
        visibilityTime: 3000,
      });
      return;
    }
    setIsLoading(true);

    let res = await register(userData);
    if (res) {
      Toast.show({
        type: 'success',
        text1: 'Logged in  Successfully',
        visibilityTime: 3000,
      });
      router.replace('/home');
      setIsLoading(false);
    } else {
      Toast.show({
        type: 'error',
        text2: 'Registration Failed',
        visibilityTime: 3000,
      });
      setIsLoading(false);
    }
  };

  return (
    <CustomKeyboardView>
      <Background>
        <View style={{ alignItems: 'center', width: 460 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 64,
              fontWeight: 'bold',
              marginTop: 100,
              paddingBottom: 20,
            }}
          >
            Register
          </Text>

          <View
            style={{
              backgroundColor: 'white',
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              paddingTop: 70,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'grey',
                fontSize: 19,
                fontWeight: 'bold',
                marginBottom: 20,
              }}
            >
              Create a new account
            </Text>
            <Spinner visible={isLoading} />
            {/* FIRST NAME Input */}
            <View style={styles.inputBox}>
              <AntDesign name="user" size={28} color="black" />
              <TextInput
                style={styles.textInput}
                value={userData.name}
                placeholder="First Name"
                placeholderTextColor={COLORS.darkBlue}
                onChangeText={(text) =>
                  setUserData({ ...userData, name: text })
                }
              />
            </View>
            {/* LAST NAME Input */}
            <View style={styles.inputBox}>
              <AntDesign name="user" size={28} color="black" />
              <TextInput
                style={styles.textInput}
                value={userData.lastName}
                placeholder="Last Name"
                placeholderTextColor={COLORS.darkBlue}
                onChangeText={(text) =>
                  setUserData({ ...userData, lastName: text })
                }
              />
            </View>
            {/* EMAIL  Input */}
            <View style={styles.inputBox}>
              <Fontisto name="email" size={28} color="black" />
              <TextInput
                style={styles.textInput}
                value={userData.email}
                placeholder="Email"
                placeholderTextColor={COLORS.darkBlue}
                keyboardType={'email-address'}
                onChangeText={(text) =>
                  setUserData({ ...userData, email: text })
                }
              />
            </View>
            {/* PASSWORD Input */}
            <View style={styles.inputBox}>
              <Feather name="lock" size={28} color="black" />
              <TextInput
                style={styles.textInput}
                value={userData.password}
                placeholder="Password"
                placeholderTextColor={COLORS.darkBlue}
                secureTextEntry={true}
                onChangeText={(text) =>
                  setUserData({ ...userData, password: text })
                }
              />
            </View>
            {/* CONFIRM PASSWORD Input */}
            <View style={styles.inputBox}>
              <Feather name="lock" size={28} color="black" />
              <TextInput
                style={styles.textInput}
                value={confirmPassword}
                placeholder="Confirm Password"
                placeholderTextColor={COLORS.darkBlue}
                secureTextEntry={true}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
            <Button
              textColor="white"
              bgColor={COLORS.darkBlue}
              btnLabel="Sign Up"
              Press={handleRegister}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                Already have an account ?
              </Text>
              <TouchableOpacity onPress={() => router.push('Login')}>
                <Text
                  style={{
                    color: COLORS.darkBlue,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Background>
    </CustomKeyboardView>
  );
};

export default Register;

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    backgroundColor: 'rgb(220,220, 220)',
    width: '80%',
    marginVertical: 10,
    borderRadius: 15,
    padding: 15,
  },
  textInput: {
    alignContent: 'flex-start',
    borderRadius: 100,
    color: COLORS.darkBlue,
    fontSize: 18,
    paddingHorizontal: 15,
  },
});
