import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {MenuSide} from './src/navigator/MenuSide';
//import {StackNavigator} from './src/navigator/StackNavigator';
//import Tabs from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <MenuSide />
      {/* <StackNavigator /> */}

      {/* <MenuSideBasic/> */}

      {/* <Tabs/> */}
    </NavigationContainer>
  );
};

export default App;
