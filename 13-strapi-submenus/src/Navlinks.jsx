import { useGlobalContext } from './context.jsx';
import sublinks from './data';

const Navlinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId(pageId)} // immediately invoke setPageId with the pageId value when the user hovers over the button
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Navlinks;
