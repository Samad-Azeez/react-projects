import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Person = ({ person, position }) => {
  const { id, image, name, title, quote } = person;
  return (
    <article key={id} className={position}>
      <img src={image} alt={title} className='person-img' />
      <h4>{name}</h4>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='icon' />
    </article>
  );
};

export default Person;
