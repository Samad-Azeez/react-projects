import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

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

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)} // set value to index when button is clicked
                className={`job-btn ${index === value && 'active-btn'}`} // if index is equal to value, add active-btn class
              >
                {job.company} {/* display company name */}
              </button>
            );
          })}
        </div>

        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            // iterate over duties array and display each duty
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default App;
