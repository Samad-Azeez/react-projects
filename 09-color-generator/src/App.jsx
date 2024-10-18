import Values from 'values.js';
import SingleColor from './SingleColor';
import { useState, useEffect } from 'react';

const App = () => {
  const [color, setColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // set isError to false to remove the error message if there is any before
    setIsError(false);
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      // if there is an error, set isError to true
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={isError ? 'error' : null}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
