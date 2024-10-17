import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  // Fetch jobs from API
  const fetchJobs = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newJobs = await response.json();
      setJobs(newJobs);
      setIsLoading(false);

      // catch any errors
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  };

  // Fetch jobs on initial render
  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  if (isError) {
    return (
      <section className='section error'>
        <h1>Oops, An Error Occurred...</h1>
      </section>
    );
  }

  return <main></main>;
};

export default App;
