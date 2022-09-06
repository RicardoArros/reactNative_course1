import React from 'react';
import {SafeAreaView} from 'react-native';

import Task01 from './src/screens/Task01';
import Task02 from './src/screens/Task02';
import Task03 from './src/screens/Task03';
import Task04 from './src/screens/Task04';
import Task05 from './src/screens/Task05';
import Task06 from './src/screens/Task06';
import Task07 from './src/screens/Task07';
import Task08 from './src/screens/Task08';
import Task09 from './src/screens/Task09';
//import FlexboxScreen from './src/screens/FlexboxScreen';
//import HelloWorld from './src/screens/HelloWorldScreen';
//import CounterScreen from './src/screens/CounterScreen';
//import BOM from './src/screens/BOMScreen';
//import DimentionsScreen from './src/screens/DimentionsScreen';
//import PositionScreen from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#28425B'}}>
      {/* <HelloWorld /> */}
      {/* <CounterScreen /> */}
      {/* <BOM /> */}
      {/* <DimentionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexboxScreen/> */}
      {/* <Task01 /> */}
      {/* <Task02 /> */}
      {/* <Task03 /> */}
      {/* <Task04 /> */}
      {/* <Task05 /> */}
      {/* <Task06 /> */}
      {/* <Task07 /> */}
      {/* <Task08 /> */}
      <Task09 />
    </SafeAreaView>
  );
};

export default App;
