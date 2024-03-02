import React, { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider, useAuth } from 'context/authContext';
import Toast from 'react-native-toast-message';
import toastConfig from '../../constans/toastAlert';

// const queryClient = new QueryClient();

const MainLayout = () => {
  const { isAuth } = useAuth();
  const segments = useSegments();
  router = useRouter();

  useEffect(() => {
    //check if user is authenticated or not
    if (typeof isAuth === 'undefined') return;

    const inApp = segments[0] == '(app)';

    if (isAuth && !inApp) {
      // redirect to home
      router.replace('home');
    } else if (isAuth == false) {
      // redirect to start page
      router.replace('StartPage');
    }
  }, [isAuth]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
      <Toast config={toastConfig} />
    </AuthContextProvider>
  );
}
