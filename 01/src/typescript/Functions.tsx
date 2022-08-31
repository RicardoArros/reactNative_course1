import React from 'react';

const Functions = () => {

  //
  const adding = (a: number, b: number): number => {
    return a + b;
  }

  return (
    <>
      <h3>Functions</h3>

      <p>El resultado es: {adding(5, 4)}</p>
    </>
  );
};

export default Functions;
