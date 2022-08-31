import React, { useState } from 'react';

import { useForm } from '../hooks/useForm';

const Forms = () => {
  const { form, email, password, onChange } = useForm({
    email: '',
    password: ''
  });

  return (
    <div>
      <h3>Forms</h3>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange(e.target.value, 'email')}
        />
      </div>
      &nbsp;
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => onChange(e.target.value, 'password')}
        />
      </div>
      
      &nbsp;

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </div>
  );
};

export default Forms;
