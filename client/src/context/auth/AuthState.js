import React, { useReducer } from 'react';

import AuthContext from '../auth/authContext';
import authReducer from '../auth/authReducer';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    loading: true,
    user: null,
    errors: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Get user

  // Login user

  // Register user

  // Logout

  // Clear errors

  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
