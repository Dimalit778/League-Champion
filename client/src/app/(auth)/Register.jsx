import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import COLORS from '../../../constans/colors';
import React, { useContext, useState } from 'react';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';
import Spinner from 'react-native-loading-spinner-overlay';

import Background from '../../components/Background';
import { registerUser } from '../../server/auth/authUser';

const Register = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const initialState = () => {
    setConfirmPassword('');
  };

  router = useRouter();

  const register = () => {
    const { name, lastName, email, password } = userData;
    if (!name || !lastName || !email || !password || !confirmPassword) {
      return Alert.alert('Please fill all required');
    }
    if (confirmPassword !== password) {
      return Alert.alert('Password not match');
    }
    setIsLoading(true);
    try {
      registerUser(userData);
    } catch (e) {
      return Alert.alert({ error: e });
    }
    Alert.alert('Register successfully');
    setIsLoading(false);
  };

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
        <Spinner visible={isLoading} />
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
          {/* <Spinner visible={isLoading} /> */}
          {/* FIRST NAME Input */}
          <TextInput
            style={styles.textInput}
            value={userData.name}
            placeholder="First Name"
            placeholderTextColor={COLORS.darkBlue}
            onChangeText={(text) => setUserData({ ...userData, name: text })}
          />
          {/* LAST NAME Input */}
          <TextInput
            style={styles.textInput}
            value={userData.lastName}
            placeholder="Last Name"
            placeholderTextColor={COLORS.darkBlue}
            onChangeText={(text) =>
              setUserData({ ...userData, lastName: text })
            }
          />
          {/* EMAIL  Input */}
          <TextInput
            style={styles.textInput}
            value={userData.email}
            placeholder="Email"
            placeholderTextColor={COLORS.darkBlue}
            keyboardType={'email-address'}
            onChangeText={(text) => setUserData({ ...userData, email: text })}
          />
          {/* PASSWORD Input */}
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
          {/* CONFIRM PASSWORD Input */}
          <TextInput
            style={styles.textInput}
            value={confirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor={COLORS.darkBlue}
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
          />

          <Button
            textColor="white"
            bgColor={COLORS.darkBlue}
            btnLabel="Sign Up"
            Press={register}
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
            <TouchableOpacity onPress={() => router.push('/(auth)/Login')}>
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
// {isPasswordShown == true ? (
//   //             <Feather name="eye-off" size={24} color="black" />
//   //           ) : (
//   //             <Feather name="eye" size={24} color="black" />
//   //           )}
