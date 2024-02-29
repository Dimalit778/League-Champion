import { Redirect } from 'expo-router';

import { AuthProvider } from '../context/AuthContext';

export default function App() {
  return <Redirect href="/(auth)" />;
}
