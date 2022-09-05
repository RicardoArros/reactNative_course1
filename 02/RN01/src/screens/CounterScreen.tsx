import React, {useState} from 'react';

import {Text, View, StyleSheet} from 'react-native';
import Fab from '../components/Fab';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>

      <Fab title="+1" position="br" onPress={() => setCounter(counter + 1)} />

      <Fab title="-1" position="bl" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0eee6',
  },
  title: {textAlign: 'center', fontSize: 30, top: 0},
});

export default CounterScreen;
