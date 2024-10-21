import React, { useEffect } from 'react';

const Alert = (props) => {
  const { type, msg, removeAlert, list } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>; // set the class name based on the type prop passed in from the parent component (App)
};

export default Alert;
