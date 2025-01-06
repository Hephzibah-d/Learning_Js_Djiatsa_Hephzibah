import React from "react";

function JobCard({ title, company, location, description }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
}

export default JobCard;
