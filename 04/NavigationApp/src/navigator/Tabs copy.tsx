import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
// import Tab3Screen from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';

import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.primary,
      }}
      // screenOptions={{
      //   tabBarActiveTintColor: colors.primary,
      //   tabBarStyle: {
      //     borderTopColor: colors.primary,
      //     borderTopWidth: 0,
      //     elevation: 5,
      //   },
      //   tabBarLabelStyle: {
      //     fontSize: 15,
      //   },
      // }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          console.log('CURRENT ROUTE', route);

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'St';
              break;

            default:
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        //options={{title: 'Este es 1'}}
        options={{
          tabBarLabel: 'Tab1!',
          tabBarIcon: props => <Text style={{color: props.color}}>X</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <Tab.Screen
        name="Tab1Screen"
        //options={{title: 'Este es 1'}}
        options={{
          tabBarLabel: 'Tab1!',
          tabBarIcon: props => <Text style={{color: props.color}}>X</Text>,
        }}
        component={Tab1Screen}
      />
      {/* <Tab.Screen
        name="Tab2Screen"
        options={{tabBarLabel: 'Tab2!', tabBarIcon: () => null}}
        component={Tab2Screen}
      /> */}
      <Tab.Screen
        name="Tab2Screen"
        options={{tabBarLabel: 'Tab2'}}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{tabBarLabel: 'Stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
