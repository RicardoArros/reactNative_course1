import React from 'react';
import {View, StyleSheet} from 'react-native';

const Task09 = () => {
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
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
    //width: 300,
  },
  boxPurple: {
    top: 100,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  boxOrange: {    
    right: -100,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  boxBlue: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

export default Task09;
