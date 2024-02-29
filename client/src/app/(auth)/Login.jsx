import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import COLORS from '../../../constans/colors';
import React, { useState } from 'react';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';
import axios from 'axios';

import Background from '../../components/Background';
import Field from '../../components/Field';

const Login = (props) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const login = () => {};

  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
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
            paddingTop: 100,
            alignItems: 'center',
          }}
        >
          <Text
            style={{ fontSize: 40, color: COLORS.darkBlue, fontWeight: 'bold' }}
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
          <TextInput
            style={styles.textInput}
            value={email}
            placeholder="Email"
            placeholderTextColor={COLORS.darkBlue}
            keyboardType={'email-address'}
            onChangeText={(text) => setEmail(text)}
          />
          {/* PASSWORD Input */}
          <TextInput
            style={styles.textInput}
            value={password}
            placeholder="Password"
            placeholderTextColor={COLORS.darkBlue}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />

          <Button
            btnLabel="Login"
            textColor="white"
            bgColor={COLORS.darkBlue}
            Press={login}
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
            <TouchableOpacity onPress={() => router.push('/(auth)/Register')}>
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
  );
};

export default Login;

const styles = StyleSheet.create({
  textInput: {
    alignContent: 'flex-start',
    borderRadius: 100,
    color: COLORS.darkBlue,
    paddingHorizontal: 30,
    width: '80%',
    backgroundColor: 'rgb(220,220, 220)',
    marginVertical: 10,
    fontSize: 18,
    padding: 15,
  },
});
