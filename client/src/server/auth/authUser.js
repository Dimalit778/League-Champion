BASE_URL = 'http://10.0.2.2:3000';
// URL that work on android vitural machine
import axios from 'axios';

const loginUser = (email, password) => {
  const user = {
    email: email,
    password: password,
  };

  axios
    .post(`${BASE_URL}/auth/login`, user)
    .then((res) => {
      let userInfo = res.data;
      router.replace('/(home)');
    })
    .catch((err) => {
      Alert.alert('Login failed');
      console.log(err);
    });
};

export const registerUser = (userData) => {
  const { name, lastName, email, password } = userData;
  axios
    .post('http://10.0.2.2:3000/auth/register', userData)
    .then((response) => {
      //   let userInfo = res.data;
      console.log('login');
      console.log(response);
      //   router.replace('/(home)');
    })
    .catch((err) => {
      Alert.alert('Login failed');
      console.log(err);
    });
};
