import React from 'react';
import { View, StyleSheet } from 'react-native';

const Task06 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxBlue}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    //justifyContent: '',
    //alignItems: 'stretch',
    //backgroundColor: '#28425B',
  },
  boxPurple: {
    flex: 1,
    //width: 100,
    //height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  boxOrange: {
    flex: 1,
    //width: 100,
    //height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  boxBlue: {
    flex: 2,
    //width: 100,
    //height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

export default Task06;
