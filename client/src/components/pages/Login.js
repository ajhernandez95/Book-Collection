import React, { useState, useContext } from 'react';
import uuid from 'uuid';
import AlertContext from '../../context/alert/alertContext';

import Alerts from '../tools/Alerts';

const Login = () => {
  const alertContext = useContext(AlertContext);
  const { alerts, setAlert } = alertContext;
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert({ msg: 'Please fill in all fields', id: uuid.v4() });
      return;
    }
    console.log('logging in...');
  };
  return (
    <div className="flex h-screen bg-gray-900">
      <form
        onSubmit={onSubmit}
        className="py-2 px-12 min-h-64 m-auto text-xl bg-white rounded"
      >
        {alerts.length > 0 && <Alerts />}
        <h1 className="text-center text-3xl">Account Login</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="text-gray-900 border border-solid border-gray-500"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Password"
            className="text-gray-900 border border-solid border-gray-500"
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Sign In"
          className="py-2 px-4 my-2 text-gray-200 bg-gray-800 rounded"
        />
      </form>
    </div>
  );
};

export default Login;
