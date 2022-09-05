import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const FlexboxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'flex-end',
    //alignItems: 'flex-end',
    //flexWrap: 'wrap',
    backgroundColor: '#28C4D9',

  },
  box1: {
    // flex: 3, // 3 + 2 + 1 = 6
    //alignSelf:'center',    
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'yellow',
  },
  box2: {
    // flex: 2, // 3 + 2 + 1 = 6
    //alignSelf: 'flex-start',
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'red',
  },
  box3: {
    // flex: 1, // 3 + 2 + 1 = 6
    //alignSelf: 'flex-end',
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'green',
  },
});

export default FlexboxScreen;
