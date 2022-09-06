import React from 'react';
import {View, StyleSheet} from 'react-native';

const Task08 = () => {
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
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  boxOrange: {    
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    right: -100,
  },
  boxBlue: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

export default Task08;
