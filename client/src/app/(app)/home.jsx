import React, { useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from 'context/authContext';
import Button from 'components/Button';

const home = () => {
  const { user, logout } = useAuth();

  console.log(user);

  return (
    <ScrollView>
      <LinearGradient colors={['#7F7FD5', '#E9E4F0']} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text>user name : {user?.name}</Text>
            <Feather name="bar-chart" size={24} color={'black'} />
            <Text style={{ fontSize: 16, fontWeight: 600 }}>FOOTBALL APP</Text>
            <AntDesign name="login" size={24} color="black" />
          </View>
          <Button btnLabel="loguot" Press={logout} />
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default home;

// const styles = StyleSheet.create({});
