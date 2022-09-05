import React from 'react';
import {View, StyleSheet} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxGreen}></View>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  boxPurple: {
    position: 'absolute',
    right: 0,    
    top: 0,
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
  },
  boxOrange: {
    position: 'absolute',
    bottom: 0,
    right: 0,    
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
  },
  boxGreen: {
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,

    // width: 100,
    // height: 100,

    ...StyleSheet.absoluteFillObject,

    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
  },
});

export default PositionScreen;
