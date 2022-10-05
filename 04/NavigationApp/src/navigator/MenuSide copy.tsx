import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {StackNavigator} from './StackNavigator';

import SettingsScreen from '../screens/SettingsScreen';

import {
  Image,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from 'react-native';

import {styles} from '../theme/appTheme';

// import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

// const SettingsStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
//     </Stack.Navigator>
//   );
// };

export const MenuSide = () => {
  //
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: false,
        // drawerContent: () => <MenuInternal/>,
      }}
      drawerContent={props => <MenuInternal {...props} />}>
      <Drawer.Screen
        name="StackNavigator"
        // options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        // options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInternal = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarCont}>
        <Image
          source={{
            uri: 'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuCont}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuText}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
