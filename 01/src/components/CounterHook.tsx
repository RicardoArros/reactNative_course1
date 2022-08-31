import React from 'react';

import { useCounter } from '../hooks/useCounter';

const CounterHook = () => {
  
  const { value, acumular } = useCounter(100);

  return (
    <>
      <h3>
        CounterHook <small>{value}</small>
      </h3>

      <button className="btn btn-primary" onClick={() => acumular(1)}>+</button>

      &nbsp;

      <button className="btn btn-primary" onClick={() => acumular(-1)}>-</button>
    </>
  );
};

export default CounterHook;
