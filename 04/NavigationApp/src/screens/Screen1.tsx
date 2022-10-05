import React, {useEffect} from 'react';

import {Button, Text, TouchableOpacity, View} from 'react-native';

import {styles} from '../theme/appTheme';

import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {
  // id: number;
  // name: string;
}

const Screen1 = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Button title="Menu" onPress={() => navigation.toggleDrawer()} />,
    });

    return () => {};
  }, []);

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

      <Text style={{marginVertical: 30, fontSize: 20}}>Navegar con argumentos</Text>

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
