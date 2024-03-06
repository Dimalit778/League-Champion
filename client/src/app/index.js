import { AppContext } from 'context/AppContext';
import { Redirect } from 'expo-router';
import { useContext } from 'react';

export default function App() {
  const { isAuth } = useContext(AppContext);
  if (!isAuth) {
    return <Redirect href="(auth)/Welcome" />;
  }
  return <Redirect href="(tabs)/home" />;
}
