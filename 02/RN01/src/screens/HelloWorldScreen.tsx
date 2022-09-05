import React from 'react';

import {Text, View} from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#348feb',
      }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
        }}>
        Hola Mundo en RN
      </Text>
    </View>
  );
};

export default HelloWorldScreen;
