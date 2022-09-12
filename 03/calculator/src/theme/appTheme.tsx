import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundMain: {
    flex: 1,
    backgroundColor: 'black',
    //paddingHorizontal: 20
  },
  calculatorCont: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    //backgroundColor: 'blue',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10
  },
  resultSmall: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,

  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,

  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
    padding: 10,
  },
});
