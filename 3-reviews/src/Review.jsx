import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  // function to check if the index is out of bounds
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // function to change the index to the next person in the array
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex); // check if the new index is out of bounds
    });
  };

  // function to change the index to the previous person in the array
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex); // check if the new index is out of bounds
    });
  };

  // function to generate a random person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length); // generate a random number between 0 and the length of the array

    if (randomNumber === index) {
      // check if the random number is the same as the index
      randomNumber = index + 1;
    }
    // set the new index
    setIndex(checkNumber(randomNumber)); // check if the new index is out of bounds
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='btn-container'>
        <button type='button' className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button type='button' className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button type='button' className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
