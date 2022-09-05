import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const BOM = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BOM BOM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginHorizontal: 20,
    borderWidth: 5
  },

});

export default BOM;
