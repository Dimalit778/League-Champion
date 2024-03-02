import { ActivityIndicator, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="gray" />
    </View>
  );
}
