import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

//import {StackNavigator} from './src/navigator/StackNavigator';

import { MenuSideBasic } from './src/navigator/MenuSideBasic';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}

      <MenuSideBasic/>
    </NavigationContainer>
  );
};

export default App;
