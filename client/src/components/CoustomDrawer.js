import { router, usePathname } from 'expo-router';
import {
  SimpleLineIcons,
  FontAwesome6,
  FontAwesome,
  Ionicons,
} from '@expo/vector-icons';
import COLORS from '../../constans/colors';
import { useSelector } from 'react-redux';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, Text } from 'react-native';
import { useEffect } from 'react';
import { View } from 'react-native';

export const CustomDrawerContent = (props) => {
  const pathname = usePathname();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  // Side Nav Drawer
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.tabsColor }}>
      <DrawerContentScrollView {...props}>
        {/* //? ----> Header - User Info Nav < ----- */}
        <View style={styles.userInfoWrapper}>
          <View style={styles.userDetailsWrapper}>
            <Text style={styles.userName}>{user?.name}</Text>
            <Text style={styles.userEmail}>{user?.email}</Text>
          </View>
        </View>
        {/* //? ----> Profile Nav < ----- */}
        <View style={{ gap: 10 }}>
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome
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
            style={[
              styles.navItem,
              { backgroundColor: pathname == '/settings' ? '#333' : '#fff' },
            ]}
            onPress={() => {
              router.push('/(nav)/profile/');
            }}
          />
          {/* //? ----> Leagues Nav < ----- */}
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome6
                name="trophy"
                size={size}
                color={pathname == '/profile' ? '#fff' : '#000'}
              />
            )}
            label={' Leagues'}
            labelStyle={[
              styles.navItemLabel,
              { color: pathname == '/profile' ? '#fff' : '#000' },
            ]}
            style={[
              styles.navItem,
              { backgroundColor: pathname == '/settings' ? '#333' : '#fff' },
            ]}
            onPress={() => {
              router.push('/(nav)/leagues/');
            }}
          />
          {/* //? ----> Settings Nav < ----- */}
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
            style={[
              styles.navItem,
              { backgroundColor: pathname == '/settings' ? '#333' : '#fff' },
            ]}
            onPress={() => {
              router.push('/(nav)/Settings');
            }}
          />
        </View>
      </DrawerContentScrollView>
      {/* //? ----> Logout Nav < ----- */}
      <DrawerItem
        icon={({ color, size }) => (
          <SimpleLineIcons name="logout" size={24} color="black" />
        )}
        label={'Log Out'}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == '/settings' ? '#fff' : '#000' },
        ]}
        style={[
          styles.navItem,
          {
            backgroundColor: pathname == '/settings' ? '#333' : '#fff',
            marginBottom: 25,
          },
        ]}
        onPress={() => {
          router.replace('Login');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navItem: {
    borderWidth: 1,
    borderColor: 'black',
  },
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
