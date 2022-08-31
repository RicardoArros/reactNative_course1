import React from 'react';

//
interface Person {
  fullname: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  number: number;
}

const ObjectLiteral = () => {
  //
  const person: Person = {
    fullname: 'Ricardo Arros',
    age: 36,
    address: {
      country: 'Chile',
      number: 666,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>

      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>

      <p></p>
    </>
  );
};

export default ObjectLiteral;
