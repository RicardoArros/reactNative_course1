import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');

    return () => {};
  }, []);

  return (
    <View>
      <Text>Tab 1 Screen</Text>
    </View>
  );
};

export default Tab1Screen;
