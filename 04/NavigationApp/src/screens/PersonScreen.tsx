import React, { useEffect } from 'react';

import {Text, View} from 'react-native';

import {styles} from '../theme/appTheme';

import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../navigator/StackNavigator';

// interface RouterParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{};

const PersonScreen = ({route, navigation}: Props) => {


  //
  //const params = route.params as RouterParams;
  const params = route.params;

  //
  useEffect(() => {
    
    navigation.setOptions({
      title: params.name
    })
  
    return () => {
      
    }
  }, [])
  

  //
  //console.log(props);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>

      {/* <Button title="Ir a página 2" onPress={() => navigation.navigate('Screen2')}/> */}
    </View>
  );
};

export default PersonScreen;
