import sublinks from './data';

const Navlinks = () => {
  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button key={pageId} className='nav-link'>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Navlinks;
