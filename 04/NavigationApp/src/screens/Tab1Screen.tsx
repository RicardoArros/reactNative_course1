import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');

    return () => {};
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Tab 1 Screen</Text>
      <Icon name="airplane-outline" size={50} color="#900" />
    </View>
  );
};

export default Tab1Screen;
