import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context.jsx';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? `sidebar show-sidebar` : `sidebar`}>
      <div className='sidebar-container'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item) => {
            // Destructure the properties from the item object
            const { pageId, page, links } = item;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link) => {
                    const { id, label, icon, url } = link;
                    return (
                      <a href={url} key={id}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
