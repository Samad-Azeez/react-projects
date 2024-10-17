import React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Person from './Person';

const Slider = ({ people, index, setIndex }) => {
  return (
    <div className='section-center'>
      {people.map((person, personIndex) => {
        let position = 'nextSlide';
        if (personIndex === index) {
          position = 'activeSlide';
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = 'lastSlide';
        }
        return <Person key={person.id} person={person} position={position} />;
      })}
      <button className='prev' onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Slider;
