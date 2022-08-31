import React from 'react';

const BasicTypes = () => {
  //
  //let firstname: string | number = "Ricardo";
  const firstname: string = 'Ricardo';
  const age: number = 36;
  const isActive: boolean = true;
  const powers: string[] = ['Velocidad', 'Volar', 'Respirar bajo el agua'];

  return (
    <>
      <h3>Tipos básicos</h3>

      <p>
        Nombre: {firstname} - Edad: {age} - Estado:{' '}
        {isActive ? 'activo' : 'no activo'}
      </p>

      <br />

      <p>{powers.join(', ')}</p>
    </>
  );
};

export default BasicTypes;
