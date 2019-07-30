import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from '../auth/authContext';
import authReducer from '../auth/authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    loading: true,
    user: null,
    errors: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  // Register user
  const registerUser = async user => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/users', user, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };
  // Login user

  // Get user

  // Register user

  // Logout

  // Clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        loading: state.loading,
        users: state.users,
        errors: state.errors,
        registerUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
