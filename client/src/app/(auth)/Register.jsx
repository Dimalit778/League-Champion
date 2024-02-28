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
import homeImg from '../../../assets/images/HomeImg.png';
import { Feather } from '@expo/vector-icons';
import COLORS from '../../../constans/colors';
import React, { useState } from 'react';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';
import Field from '../../components/Field';
import Background from '../../components/Background';

const Register = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  router = useRouter();

  const handleLogin = () => {};

  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          Create a new account
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
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field placeholder="Email " keyboardType={'email-address'} />

          <Field placeholder="Password" secureTextEntry={true} />

          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
            }}
          >
            <Text style={{ color: 'grey', fontSize: 16 }}>
              By signing in, you agree to our{' '}
            </Text>
            <Text
              style={{
                color: COLORS.darkBlue,
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '78%',
              paddingRight: 16,
              marginBottom: 10,
            }}
          >
            <Text style={{ color: 'grey', fontSize: 16 }}>and </Text>
            <Text
              style={{
                color: COLORS.darkBlue,
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              Privacy Policy
            </Text>
          </View>
          <Button
            textColor="white"
            bgColor={COLORS.darkBlue}
            btnLabel="Sign Up"
            Press={() => {
              alert('Account created');
              props.navigation.navigate('Login');
            }}
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
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}
            >
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
  );
};

export default Register;

const styles = StyleSheet.create({});
// {isPasswordShown == true ? (
//   //             <Feather name="eye-off" size={24} color="black" />
//   //           ) : (
//   //             <Feather name="eye" size={24} color="black" />
//   //           )}
