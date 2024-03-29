import { Link, router, usePathname } from 'expo-router';
import {
  SimpleLineIcons,
  FontAwesome6,
  FontAwesome5,
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

        <View style={{ gap: 10 }}>
          {/* //? ----> Home Nav < ----- */}
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome5
                name="home"
                size={28}
                color={pathname == '/home' ? '#fff' : '#000'}
              />
            )}
            label={'Home'}
            labelStyle={[
              styles.navItemLabel,
              { color: pathname == '/home' ? '#fff' : '#000' },
            ]}
            style={[
              styles.navItem,
              { backgroundColor: pathname == '/home' ? '#333' : '#fff' },
              { borderColor: pathname == '/home' ? '#fff' : '#000' },
            ]}
            onPress={() => {
              router.navigate('(user)/(tabs)/home');
            }}
          />
          {/* //? ----> Profile Nav < ----- */}
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome
                name="user"
                size={28}
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
              { backgroundColor: pathname == '/profile' ? '#333' : '#fff' },
              { borderColor: pathname == '/profile' ? '#fff' : '#000' },
            ]}
            onPress={() => {
              router.navigate('(user)/profile');
            }}
          />
          {/* //? ----> Leagues Nav < ----- */}
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome6
                name="trophy"
                size={28}
                color={pathname == '/leagues' ? '#fff' : '#000'}
              />
            )}
            label={'Leagues'}
            labelStyle={[
              styles.navItemLabel,
              { color: pathname == '/leagues' ? '#fff' : '#000' },
            ]}
            style={[
              styles.navItem,
              { backgroundColor: pathname == '/leagues' ? '#333' : '#fff' },
              { borderColor: pathname == '/leagues' ? '#fff' : '#000' },
            ]}
            onPress={() => {
              router.navigate('(user)/leagues');
            }}
          />
          {/* //? ----> Settings Nav < ----- */}
          <DrawerItem
            icon={({ color, size }) => (
              <Ionicons
                name="settings"
                size={28}
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
              { borderColor: pathname == '/settings' ? '#fff' : '#000' },
            ]}
            onPress={() => {
              router.navigate('(user)/settings');
            }}
          />
        </View>
      </DrawerContentScrollView>
      {/* //? ----> Logout Nav < ----- */}
      <DrawerItem
        icon={({ color, size }) => (
          <SimpleLineIcons name="logout" size={28} color="black" />
        )}
        label={'Log Out'}
        labelStyle={[styles.navItemLabel, { color: '#000' }]}
        style={[
          styles.navItem,
          {
            backgroundColor: '#fff',
            marginBottom: 25,
            marginHorizontal: 60,
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
    backgroundColor: 'grey',
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
