import { useAuth } from 'context/AuthContext';
import { Redirect, useRouter } from 'expo-router';

export default function App() {
  return <Redirect href="Welcome" />;
}
