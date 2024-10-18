import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = (props) => {
  const { rgb, weight, index, hexColor } = props; // destructuring the props

  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(','); // converting the rgb array to string

  // using the rgbToHex function from utils to convert the rgb value to hex
  // const hex = rgbToHex(...rgb);
  // But this is no longer needed since we already have the hexColor value from the props 😗😗

  const hexValue = `#${hexColor}`;

  // useEffect to remove the alert after 3 seconds
  useEffect(() => {
    // setting the alert to false after 3 seconds
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        // copying the hex value to the clipboard
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
