import React from 'react';

import { StackScreenProps } from '@react-navigation/stack';

import {Button, Text, View} from 'react-native';

import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

const Screen3 = ( {navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ViewThree</Text>

      <Button title="Regresar" onPress={() => navigation.pop} />

      <Button title="Regresar" onPress={() => navigation.popToTop} />
    </View>
  );
};

export default Screen3;
