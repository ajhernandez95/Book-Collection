import React, { useState, useContext, useEffect } from 'react';
import uuid from 'uuid';

import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Alerts from '../tools/Alerts';

const Register = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { registerUser, isAuth } = authContext;
  const { alerts, setAlert } = alertContext;
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  useEffect(() => {
    if (isAuth) {
      props.history.push('/');
    }
  }, [props.history, isAuth]);

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || password2 === '') {
      setAlert({ msg: 'Please fill in all fields', id: uuid.v4() });
      return;
    } else if (password !== password2) {
      setAlert({ msg: 'Passwords do not match', id: uuid.v4() });
    }
    registerUser({ name, email, password });
  };
  return (
    <div className='flex h-screen bg-gray-900'>
      <form
        onSubmit={onSubmit}
        className='py-2 px-12 min-h-64 m-auto text-xl bg-white rounded'
      >
        {alerts.length > 0 && <Alerts />}
        <h1 className='text-center text-3xl'>Account Register</h1>
        <div className='flex flex-col mb-4'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='text-gray-900 border border-solid border-gray-500'
            onChange={onChange}
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
            className='text-gray-900 border border-solid border-gray-500'
            onChange={onChange}
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='text-gray-900 border border-solid border-gray-500'
            onChange={onChange}
          />
        </div>
        <div className='flex flex-col mb-4'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            placeholder='Password'
            className='text-gray-900 border border-solid border-gray-500'
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          value='Sign In'
          className='py-2 px-4 my-2 text-gray-200 bg-gray-800 rounded'
        />
      </form>
    </div>
  );
};

export default Register;
