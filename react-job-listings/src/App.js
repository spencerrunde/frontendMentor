import React, { useEffect, useState } from "react";

import JobListings from "./components/JobListings";
import data from "./assets/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterJobs = ({ role, level, languages, tools }) => {
    if (filters.length === 0) {
      return true;
    }

    //combining tags into a single array
    const tagArray = [role, level];

    if (languages && tools) {
      tagArray.push(...languages, ...tools);
    }

    return filters.every((tag) => tagArray.includes(tag));
  };

  const filteredJobs = jobs.filter(filterJobs);

  const handleTagClick = (tag) => {
    if (filters.includes(tag) === false) setFilters([...filters, tag]);
  };

  const handleCloseClick = (removedFilter) => {
    setFilters(filters.filter((filter) => filter !== removedFilter));
  };

  const handleClearClick = () => {
    setFilters([]);
  };

  return (
    <div className="App">
      <header />
      <main>
        {filters.length > 0 && (
          <div className="filterBar">
            <div className="filterBar__wrapper">
              {filters.map((filter, i) => (
                <div className="filterBar__tag" key={i}>
                  <span>{filter}</span>
                  <button
                    className="closeButton"
                    onClick={() => handleCloseClick(filter)}
                  >
                    <img src="./images/icon-remove.svg" alt="Close icon" />
                  </button>
                </div>
              ))}
            </div>
            <button className="clearButton" onClick={() => handleClearClick()}>
              Clear
            </button>
          </div>
        )}
        {jobs.length === 0 ? (
          <p>Loading jobs...</p>
        ) : (
          filteredJobs.map((job) => (
            <JobListings
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </main>
    </div>
  );
}

export default App;
