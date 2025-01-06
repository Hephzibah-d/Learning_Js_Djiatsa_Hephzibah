import React, { useEffect, useState } from "react";
import JobList from "./components/JobList";
import "./styles/App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Fetch job data from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://api.crackeddevs.com/jobs", { method: "GET", mode: "cors" });
        if (!response.ok) {
          throw new Error("Failed to fetch jobs.");
        }
        const data = await response.json();
        setJobs(data.jobs); // Assume jobs is the key in API response
        setFilteredJobs(data.jobs);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search query
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query)
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Job Listings</h1>
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </header>
      <main>
        <JobList jobs={filteredJobs} />
      </main>
    </div>
  );
}

export default App;
