import React from "react";
import JobCard from "./JobCard";

function JobList({ jobs }) {
  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            description={job.description}
          />
        ))
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}

export default JobList;
