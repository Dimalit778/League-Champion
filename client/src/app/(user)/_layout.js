import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { router, usePathname } from 'expo-router';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { SimpleLineIcons } from '@expo/vector-icons';
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

  // Side Nav Drawer
  return (
    <View style={{ flex: 1, backgroundColor: 'blue' }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoWrapper}>
          <View style={styles.userDetailsWrapper}>
            <Text style={styles.userName}>{user?.name}</Text>
            <Text style={styles.userEmail}>{user?.email}</Text>
          </View>
        </View>
        <View style={{}}>
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
            style={{
              backgroundColor: pathname == '/profile' ? '#333' : '#fff',
            }}
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
            style={{
              backgroundColor: pathname == '/settings' ? '#333' : '#fff',
            }}
            onPress={() => {
              router.push('(nav)');
            }}
          />
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        icon={({ color, size }) => (
          <SimpleLineIcons name="logout" size={24} color="black" />
        )}
        label={'Log Out'}
        labelStyle={[
          styles.logoutNav,
          { color: pathname == '/settings' ? '#fff' : '#000' },
        ]}
        style={{
          backgroundColor: pathname == '/settings' ? '#333' : '#fff',
        }}
        onPress={() => {
          router.push('(nav)');
        }}
      />
    </View>
  );
};

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Drawer.Screen
        name="settings"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.tabsColor },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}
      /> */}
    </Drawer>
  );
}

const styles = StyleSheet.create({
  logoutNav: {
    marginLeft: -20,
    fontSize: 18,
    paddingBottom: 20,
  },
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
    backgroundColor: 'green',
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
