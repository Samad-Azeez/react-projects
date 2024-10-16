import { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import Error from './Error';
const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState(false);

  // function to fetch tours data from the API
  const fetchTours = async () => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(url);
      // check if the response is ok, if not throw an error
      if (!response.ok) {
        throw new Error();
      }
      // if the response is ok, then parse the data
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(response);
    } catch (error) {
      setLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  // fetch tours data when component mounts for the first time
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <Error />;
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />;
    </main>
  );
};

export default App;
