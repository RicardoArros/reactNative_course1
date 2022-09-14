import React from 'react';

import {Button, Text, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {
  id: number;
  name: string;
}

const Screen1 = ({navigation}: any) => {
  return (
    <View>
      <Text>ViewOne</Text>

      <Button title="Ir a pagina2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

export default Screen1;
