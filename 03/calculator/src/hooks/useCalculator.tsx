import React, {useRef, useState} from 'react';

//
enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

const useCalculator = () => {
  const [numberPrev, setNumberPrev] = useState('0');
  const [number, setNumber] = useState('0');

  //
  const lastOperation = useRef<Operators>();

  //
  const numberBuild = (numberText: string) => {
    // No aceptar doble punto
    if (number.includes('.') && numberText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);

        // Evaluar si es otro cero, y hay un punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);

        // Evitar 0000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  //
  const btnPositiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  // Function btn limpiar numeros
  const btnClean = () => {
    setNumber('0');
    setNumberPrev('0');
  };

  // Function btn borrar último digito
  const btnDelete = () => {
    //
    let negative = '';
    let numberTemp = number;

    //
    if (number.includes('-')) {
      negative = '-';

      numberTemp = number.substring(1);
    }

    //
    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  //
  const changeNumToPrev = () => {
    //
    if (number.endsWith('.')) {
      setNumberPrev(number.slice(0, -1));
    } else {
      setNumberPrev(number);
    }

    setNumber('0');
  };

  // Function btn divide
  const btnDivide = () => {
    changeNumToPrev();

    lastOperation.current = Operators.divide;
  };

  // Function btn multiply
  const btnMultiply = () => {
    changeNumToPrev();

    lastOperation.current = Operators.multiply;
  };

  // Function btn subtract
  const btnSubtract = () => {
    changeNumToPrev();

    lastOperation.current = Operators.subtract;
  };

  // Function btn add
  const btnAdd = () => {
    changeNumToPrev();

    lastOperation.current = Operators.add;
  };

  // Function calculate
  const calculate = () => {

    setNumberPrev('0');
    
    //
    const num1 = Number(number);
    const num2 = Number(numberPrev);

    if (num1 === 0 && num2 === 0) {
      return setNumber('0');
    }


    if (num1 && !num2) {
      return setNumber(`${num1}`);
    }

    //
    switch (lastOperation.current) {
      case Operators.divide:
        setNumber(`${num2 / num1} `);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2} `);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1} `);
        break;
      case Operators.add:
        setNumber(`${num1 + num2} `);
        break;

      default:
        break;
    }
  };

  return {
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
  };
};

export default useCalculator;
