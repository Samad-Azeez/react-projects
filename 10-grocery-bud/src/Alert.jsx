import React, { useEffect } from 'react';

const Alert = ({ type, msg }) => {
  return <p className={`alert alert-${type}`}>{msg}</p>; // set the class name based on the type prop passed in from the parent component (App)
};

export default Alert;
