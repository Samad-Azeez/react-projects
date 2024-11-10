import React from 'react';
import phoneImg from './assets/images/phone.svg';
import { useGlobalContext } from './context.jsx';

const Hero = () => {
  const data = useGlobalContext();
  console.log(data);
  return <h2>hero component</h2>;
};

export default Hero;
