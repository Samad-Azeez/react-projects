import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Get all unique categories from items
const allCategories = items.map((item) => item.category);
const uniqueCategories = ['all', ...new Set(allCategories)];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(uniqueCategories);

  // Filter items based on category
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
