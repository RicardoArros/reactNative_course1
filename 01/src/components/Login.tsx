import React, { useEffect, useReducer } from 'react';

interface AuthState {
  validating: boolean;
  token: string | null;
  username: string;
  firstname: string;
}

const initialState = {
  validating: true,
  token: null,
  username: '',
  firstname: '',
};

type LoginPayload = {
  username: string;
  firstname: string;
};

type AuthAction = { type: 'logout' } | { type: 'login'; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validating: false,
        token: null,
        username: '',
        firstname: '',
      };

    case 'login':
      const { firstname, username } = action.payload;

      return {
        validating: false,
        token: 'ABC123',
        username,
        firstname,
      };

    default:
      return state;
  }
};

const Login = () => {
  const [{ validating, token, username }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 2000);

    return () => {};
  }, []);

  const login = () => {
    dispatch({
      type: 'login',
      payload: { firstname: 'Ricardo', username: 'Strider' },
    });
  };

  const logout = () => {
    dispatch({
      type: 'logout',
    });
  };

  if (validating) {
    return (
      <>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <div>
      <h3 className="mb-4">Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado como {username} </div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}
      {token ? (
        <button className="btn btn-primary btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
      &nbsp;
    </div>
  );
};

export default Login;
