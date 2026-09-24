import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { jobs } from "../data/data";

function JobDetails() {
  const { id } = useParams();
  const [applied, setApplied] = useState(false);

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <main className="container py-5">
        <h2>Job Not Found</h2>
        <Link to="/jobs">Back to Jobs</Link>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <Link to="/jobs">Back to Jobs</Link>

      <div className="card mt-3">
        <div className="card-body p-4">
          <h1>{job.title}</h1>
          <h5>{job.company}</h5>

          <p className="text-muted">
            {job.location} | {job.type} | {job.salary}
          </p>

          <hr />

          <h4>Description</h4>
          <p>{job.description}</p>

          <h4>Skills</h4>
          <div className="mb-4">
            {job.skills.map((skill) => (
              <span className="badge bg-secondary me-2" key={skill}>
                {skill}
              </span>
            ))}
          </div>

          <button
            className="btn btn-primary"
            onClick={() => setApplied(true)}
            disabled={applied}
          >
            {applied ? "Application Submitted" : "Apply Now"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default JobDetails;