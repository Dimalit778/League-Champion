import { Redirect } from 'expo-router';
import { Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return <Redirect href="/(auth)" />;
}
