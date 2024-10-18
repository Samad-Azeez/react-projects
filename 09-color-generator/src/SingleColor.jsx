import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = (props) => {
  const { rgb, weight, index, hexColor } = props; // destructuring the props

  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(','); // converting the rgb array to string

  // using the rgbToHex function from utils to convert the rgb value to hex
  // const hex = rgbToHex(...rgb);
  // But this is no longer needed since we already have the hexColor value from the props

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hexColor}</p>
    </article>
  );
};

export default SingleColor;
