import { useGlobalContext } from './context';
import sublinks from './data';

const Submenu = () => {
  const { pageId } = useGlobalContext();
  // Find the current page in the sublinks array
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  return (
    <div className={currentPage ? `submenu show-submenu` : `submenu`}>
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
