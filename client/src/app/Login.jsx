import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import COLORS from '../../constans/colors';
import React, { useState } from 'react';
import Button from '../components/Button';
import { useRouter } from 'expo-router';
import axios from 'axios';

import Background from '../components/Background';
import CustomKeyboardView from 'components/CustomKeyboardView';
import { useAuth } from 'context/authContext';
import Toast from 'react-native-toast-message';

const Login = () => {
  // const [isPasswordShown, setIsPasswordShown] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  // -->  LOGIN  Function
  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Missing Fields',
        visibilityTime: 3000,
      });
      return;
    }
    setIsLoading(true);
    let res = await login(email, password);

    if (res) {
      Toast.show({
        type: 'success',
        text1: 'Logged in  Successfully',
        visibilityTime: 3000,
      });
      router.replace('/home');
      setIsLoading(false);
    }
    console.log('res' + res);
    Toast.show({
      type: 'error',
      text: 'Wrong email or password',
      visibilityTime: 3000,
    });
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
            Login
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              paddingTop: 50,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: COLORS.darkBlue,
                fontWeight: 'bold',
              }}
            >
              Welcome Back
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 20,
              }}
            >
              Login to your account
            </Text>
            {/* EMAIL  Input */}
            <View style={styles.inputBox}>
              <Fontisto name="email" size={28} color="black" />
              <TextInput
                style={styles.textInput}
                value={email}
                placeholder="Email"
                placeholderTextColor={COLORS.darkBlue}
                keyboardType={'email-address'}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            {/* PASSWORD Input */}
            <View style={styles.inputBox}>
              <Feather name="lock" size={28} color="black" />
              <TextInput
                style={styles.textInput}
                value={password}
                placeholder="Password"
                placeholderTextColor={COLORS.darkBlue}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <Button
              btnLabel="Login"
              textColor="white"
              bgColor={COLORS.darkBlue}
              Press={handleLogin}
            />

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                Don't have an account ?
              </Text>
              <TouchableOpacity onPress={() => router.push('/Register')}>
                <Text
                  style={{
                    color: COLORS.darkBlue,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Background>
    </CustomKeyboardView>
  );
};

export default Login;

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
