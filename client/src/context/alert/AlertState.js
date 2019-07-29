import React, { useReducer } from 'react';

import alertReducer from './alertReducer';
import AlertContext from './alertContext';
import { SET_ALERT, CLEAR_ALERTS } from '../types';

const AlertState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set alert
  const setAlert = alert => {
    dispatch({ type: SET_ALERT, payload: alert });
    setTimeout(() => clearAlerts(alert.id), 4000);
  };
  // Clear alert
  const clearAlerts = id => dispatch({ type: CLEAR_ALERTS, payload: id });
  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
