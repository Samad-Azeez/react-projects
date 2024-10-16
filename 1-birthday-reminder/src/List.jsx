import React, { useState } from 'react';
import data from './data';

const List = () => {
  const [people, setPeople] = useState(data);
  const count = people.length;

  return (
    <div>
      <h2>{count} Birthdays Today</h2>
      <div>
        {/* Display the list of people */}
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div key={id}>
              <img src={image} alt='person image' style={{ width: '80px' }} />
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          );
        })}
        {/* Clear All button */}
        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </div>
  );
};

export default List;
