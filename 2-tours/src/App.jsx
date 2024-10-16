import { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import Error from './Error';
const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  // function to fetch tours data from the API
  const fetchTours = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(url);
      // check if the response is ok, if not throw an error
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      // if the response is ok, then parse the data
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
      console.log(response);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log('msg:', error.message);
    }
  };

  // fetch tours data when component mounts for the first time
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <Error />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>

          {/* add a button to fetch the tours again if the user wants to refresh */}
          <button className='btn' onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
