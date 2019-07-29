import React, { useContext } from 'react';

import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  return alerts.map(alert => (
    <div className="flex mb-4 bg-red-300 w-full">
      <span className="mx-2">
        <i className="fa fa-info-circle" />
      </span>
      <p>{alert.msg}</p>
    </div>
  ));
};

export default Alerts;
