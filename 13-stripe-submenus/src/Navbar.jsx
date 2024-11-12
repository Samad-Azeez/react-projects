import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button type='button' className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        {/* nav links later */}
      </div>
    </nav>
  );
};

export default Navbar;
