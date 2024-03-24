import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const Profile = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: 'Profile', headerShown: true }} />
      <View>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
