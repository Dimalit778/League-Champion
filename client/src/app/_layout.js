import { AuthProvider, useAuth } from 'context/AuthContext';
import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';
import toastAlert from '../../constans/toastAlert';

const Root = () => {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <Toast config={toastAlert} />
    </AuthProvider>
  );
};

export default Root;
