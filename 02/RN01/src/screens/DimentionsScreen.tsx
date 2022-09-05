import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  //Dimensions,
  useWindowDimensions,
} from 'react-native';

const DimentionsScreen = () => {
  //const {width, height} = Dimensions.get('window');
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.boxPurple, width: width * 0.6}}></View>

        <View style={styles.boxOrange}></View>

        <Text style={styles.title}>
          W: {width}, H: {height}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  boxPurple: {
    backgroundColor: '#5856D6',
    //width: '50%',
    height: '50%',
  },
  boxOrange: {
    backgroundColor: '#E0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default DimentionsScreen;
