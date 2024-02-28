import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import COLORS from '../../../constans/colors';
import React, { useState } from 'react';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../../components/Background';
import Field from '../../components/Field';

const Login = (props) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  router = useRouter();
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
          <Field placeholder="Email" keyboardType={'email-address'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 200,
            }}
          >
            <Text
              style={{
                color: COLORS.darkBlue,
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              Forgot Password ?
            </Text>
          </View>
          <Button
            textColor="white"
            backgroundColor={COLORS.darkBlue}
            title="Login"
            Press={() => alert('Logged In')}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
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

const styles = StyleSheet.create({});
