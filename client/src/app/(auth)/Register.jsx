import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import CustomKeyboardView from 'components/CustomKeyboardView';
import Background from 'components/Background';
import Button from 'components/Button';
import COLORS from '../../../constans/colors';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
//API
import { register } from 'redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
  // hooks
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (name == '' || email == '' || password == '' || confirmPassword == '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter All Fields',
      });
      return;
    }
    if (confirmPassword !== password) {
      Toast.show({
        type: 'error',
        text1: 'Passwords do not match',
      });
      return;
    }
    const user = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(register(user)).then((action) => {
      if (action.error) {
        Toast.show({
          type: 'error',
          text1: action.payload,
        });
      } else {
        Toast.show({
          type: 'success',
          text1: 'Login Successfully',
        });

        router.replace('Login');
      }
    });
  };
  return (
    <CustomKeyboardView>
      <Background>
        <Text>Register</Text>
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
            {/* FIRST NAME Input */}
            <View style={styles.inputBox}>
              <AntDesign name="user" size={28} color="black" />
              <TextInput
                style={styles.textInput}
                value={name}
                placeholder="First Name"
                placeholderTextColor={COLORS.darkBlue}
                onChangeText={(text) => setName(text)}
              />
            </View>
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
              textFont={24}
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
              <TouchableOpacity onPress={() => router.push('/Login')}>
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
