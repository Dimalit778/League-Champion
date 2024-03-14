import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { router, usePathname } from 'expo-router';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';
import COLORS from '../../../constans/colors';
import { useSelector } from 'react-redux';

const CustomDrawerContent = (props) => {
  const pathname = usePathname();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoWrapper}>
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>{user?.name}</Text>
          <Text style={styles.userEmail}>{user?.email}</Text>
        </View>
      </View>

      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={pathname == '/profile' ? '#fff' : '#000'}
          />
        )}
        label={'Profile'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/profile' ? '#fff' : '#000' },
        ]}
        style={{ backgroundColor: pathname == '/profile' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('/(drawer)/(tabs)/profile');
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings"
            size={size}
            color={pathname == '/settings' ? '#fff' : '#000'}
          />
        )}
        label={'Settings'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/settings' ? '#fff' : '#000' },
        ]}
        style={{ backgroundColor: pathname == '/settings' ? '#333' : '#fff' }}
        onPress={() => {
          router.push('/settings');
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: 'League Champion',
        headerStyle: { backgroundColor: COLORS.tabsColor },
        headerTintColor: 'white',
        headerTitleAlign: 'center',

        // drawerStyle: { backgroundColor: COLORS.tabsColor },
      }}
    >
      <Drawer.Screen name="(tabs)" />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
