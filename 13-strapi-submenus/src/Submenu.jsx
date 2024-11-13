import { useRef } from 'react';
import { useGlobalContext } from './context';
import sublinks from './data';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  // Find the current page in the sublinks array
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  // Create a reference to the submenu container
  const submenuContainer = useRef(null);

  // function to handle mouse leave event
  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current; // Get the submenu container element from the ref object
    // Get the dimensions of the submenu container
    const result = submenu.getBoundingClientRect();
    // get the X and Y coordinates of the mouse pointer from the event object when the mouse leaves the submenu
    const { clientX, clientY } = event;

    // Check if the mouse pointer is outside the submenu container
    if (
      clientX < result.left ||
      clientX > result.right ||
      clientY > result.bottom
    ) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? `submenu show-submenu` : `submenu`}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        // Set the number of columns based on the number of links in the current page object
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? `1fr 1fr` : `1fr`,
        }}
      >
        {currentPage?.links?.map((link) => {
          // Destructure the link object
          const { id, label, icon, url } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
