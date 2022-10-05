import React, { useEffect } from 'react';
import {Text, View} from 'react-native';

const Tab2Screen = () => {
  useEffect(() => {
    console.log('Tab2Screen effect');

    return () => {};
  }, []);

  return (
    <View>
      <Text>Tab 2 Screen</Text>
    </View>
  );
};

export default Tab2Screen;
