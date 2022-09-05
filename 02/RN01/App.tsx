import React from 'react';
import {SafeAreaView} from 'react-native';

//import HelloWorld from './src/screens/HelloWorldScreen';
//import CounterScreen from './src/screens/CounterScreen';
//import BOM from './src/screens/BOMScreen';
//import DimentionsScreen from './src/screens/DimentionsScreen';
import PositionScreen from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorld /> */}
      {/* <CounterScreen /> */}
      {/* <BOM /> */}
      {/* <DimentionsScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;
