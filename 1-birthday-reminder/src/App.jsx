import { useState } from 'react';
import List from './List';
import data from './data';

const App = () => {
  // Use the useState hook to create a state variable called people
  const [people, setPeople] = useState(data);
  const count = people.length;

  return (
    <main>
      <section className='container'>
        {/* Display the title and count of birthdays */}
        <h3>{count} Birthdays Today</h3>

        {/* List component */}
        <List people={people} />

        {/* Clear All button */}
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
