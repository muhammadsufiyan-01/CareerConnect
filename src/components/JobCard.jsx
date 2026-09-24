import { useState } from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  const [saved, setSaved] = useState(false);

  const handleApply = () => {
    alert(`Application started for ${job.title}`);
  };

  return (
    <div className="card job-card h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between gap-2">
          <h5 className="card-title">{job.title}</h5>

          <button
            className="btn btn-sm btn-link save-button"
            onClick={() => setSaved(!saved)}
          >
            {saved ? "Saved" : "Save"}
          </button>
        </div>

        <p className="fw-semibold mb-1">{job.company}</p>
        <p className="text-muted mb-1">{job.location}</p>
        <p className="text-muted mb-2">{job.salary}</p>

        <span className="badge bg-light text-dark border">
          {job.type}
        </span>

        <div className="mt-3 d-flex gap-2">
          <Link to={`/jobs/${job.id}`} className="btn btn-outline-primary btn-sm">
            Details
          </Link>

          <button className="btn btn-primary btn-sm" onClick={handleApply}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;