import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './assets/logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // this useEffect will run every time the value of showLinks changes to set the height of the links container to the height of the links
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height; // get the height of the links
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`; // set the height of the container to the height of the links
    } else {
      linksContainerRef.current.style.height = '0px'; // set the height of the container to 0
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          {/* only show the button when the screen size is less than 992px */}
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {/*  Add the links here */}
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Add the social icons here */}
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
