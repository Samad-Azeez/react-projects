import Review from './Review';

const App = () => {
  return (
    <main>
      <section className='title'>
        <h2>our reviews</h2>
        <div className='underline'></div>
        {/* review component */}
        <Review />
      </section>
    </main>
  );
};

export default App;
