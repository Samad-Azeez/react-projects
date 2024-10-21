import { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

// function that gets the list from local storage or returns an empty array if there is no list
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage()); // get the list from local storage when the component mounts
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert if no value is entered
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      // if editing and name value isn't empty, update the item with the new name
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setEditID(null);
      setName('');
      showAlert(true, 'success', 'item updated');
      setIsEditing(false);
    } else {
      // if not editing, add the new item to the list
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  // function that sets the alert state based on the values passed in
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  // function that clears the list
  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    // filter out the item with the id that matches the id passed in
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    // save the list to local storage when the list state changes
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default App;
