import React from 'react';
import logo from './assets/images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='stripe' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        {/* Add onMouseOver event listener to openSubmenu */}
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={openSubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={openSubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={openSubmenu}>
              company
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
