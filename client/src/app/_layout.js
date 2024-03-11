// import { AuthProvider } from 'context/AuthContext';
import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';
import toastAlert from '../../constans/toastAlert';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack screenOptions={{ headerShown: false }} />
        <Toast config={toastAlert} />
      </PersistGate>
    </Provider>
  );
};

export default Root;
