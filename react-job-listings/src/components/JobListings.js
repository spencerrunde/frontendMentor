const JobListings = ({
  //destructing job properties
  job: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  handleTagClick,
}) => {
  //combining tags into a single array
  const tagArray = [role, level];

  if (languages && tools) {
    tagArray.push(...languages, ...tools);
  }

  //return HTML for each job card
  return (
    <div className={`jobCard ${featured ? "jobCard--featured" : ""}`}>
      <div className="jobCard__logo">
        <img src={logo} alt={company} />
      </div>
      <div className="jobCard__info">
        <h1>
          {company}
          {isNew && <span className="new">New!</span>}
          {featured && <span className="featured">Featured</span>}
        </h1>
        <h2>{position}</h2>
        <p>
          {postedAt} <span>●</span> {contract} <span>●</span> {location}
        </p>
      </div>
      <div className="jobCard__filters">
        {tagArray
          ? tagArray.map((tag, i) => (
              <button key={i} onClick={() => handleTagClick(tag)}>
                {tag}
              </button>
            ))
          : null}
      </div>
    </div>
  );
};

export default JobListings;
