import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Settings = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: 'Settings', headerShown: true }} />
      <View>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
