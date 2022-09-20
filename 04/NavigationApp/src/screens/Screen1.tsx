import React from 'react';

import {Button, Text, TouchableOpacity, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {
  // id: number;
  // name: string;
}

const Screen1 = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ViewOne</Text>

      <Button
        title="Ir a pagina2"
        onPress={() => navigation.navigate('Screen2')}
      />

      {/* <Button
        title="Ir a persona"
        onPress={() => navigation.navigate('PersonScreen')}
      /> */}

      <Text>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.btnBig,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={styles.btnBigText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.btnBig,
            backgroundColor: '#FF9427',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Text style={styles.btnBigText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen1;
