import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {Button, Text, View} from 'react-native';

import {CommonActions} from '@react-navigation/native';

import {styles} from '../theme/appTheme';

const Screen2 = () => {
  const navigator = useNavigation<any>();

  useEffect(() => {

    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: ''
    })

    return () => {};
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ViewTwo</Text>

      {/* 
      <Button
        title="Ir a página 3"
        onPress={() =>
          navigator.dispatch(CommonActions.navigate({name: 'Screen3'}))
        }
      /> 
      */}

      <Button
        title="Ir a página 3"
        onPress={() => navigator.navigate('Screen3')}
      />
    </View>
  );
};

export default Screen2;
