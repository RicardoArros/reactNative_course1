import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Text} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { colors } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'green'}}

      screenOptions={({route}) => ({
        tabBarShowIcon: true,

        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },

        tabBarActiveTintColor: 'black',

        tabBarPressColor: colors.primary,

        tabBarLabelStyle: {
          fontSize: 12,
        },
        
        tabBarStyle: {
          paddingVertical: 12,
          backgroundColor: 'white',
        },
        tabBarIconStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        tabBarIcon: ({focused, color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'A';
              break;

            case 'ContactsScreen':
              iconName = 'B';
              break;

            case 'AlbumsScreen':
              iconName = 'C';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
