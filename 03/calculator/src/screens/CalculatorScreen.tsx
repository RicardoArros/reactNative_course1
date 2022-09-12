import React from 'react';

import {Text, View} from 'react-native';

import BtnCalc from '../components/BtnCalc';

import {styles} from '../theme/appTheme';

import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    number,
    numberPrev,
    btnClean,
    btnDelete,
    numberBuild,
    btnPositiveNegative,
    calculate,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnAdd,
  } = useCalculator();

  return (
    <View style={styles.calculatorCont}>
      {numberPrev !== '0' && (
        <Text style={styles.resultSmall}>{numberPrev}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Btn row */}
      <View style={styles.row}>
        <BtnCalc text="C" color="#9B9B9B" action={btnClean} />
        <BtnCalc text="+/-" color="#9B9B9B" action={btnPositiveNegative} />
        <BtnCalc text="del" color="#9B9B9B" action={btnDelete} />
        <BtnCalc text="/" color="#FF9427" action={btnDivide} />
      </View>

      {/* Btn row */}
      <View style={styles.row}>
        <BtnCalc text="7" action={numberBuild} />
        <BtnCalc text="8" action={numberBuild} />
        <BtnCalc text="9" action={numberBuild} />
        <BtnCalc text="X" color="#FF9427" action={btnMultiply} />
      </View>

      {/* Btn row */}
      <View style={styles.row}>
        <BtnCalc text="4" action={numberBuild} />
        <BtnCalc text="5" action={numberBuild} />
        <BtnCalc text="6" action={numberBuild} />
        <BtnCalc text="-" color="#FF9427" action={btnSubtract} />
      </View>

      {/* Btn row */}
      <View style={styles.row}>
        <BtnCalc text="1" action={numberBuild} />
        <BtnCalc text="2" action={numberBuild} />
        <BtnCalc text="3" action={numberBuild} />
        <BtnCalc text="+" color="#FF9427" action={btnAdd} />
      </View>

      {/* Btn row */}
      <View style={styles.row}>
        <BtnCalc text="0" width action={numberBuild} />
        <BtnCalc text="." action={numberBuild} />
        <BtnCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
