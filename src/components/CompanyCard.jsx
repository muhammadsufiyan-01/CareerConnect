import { Link } from "react-router-dom";

function CompanyCard({ company }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5>{company.name}</h5>
        <p className="text-muted mb-2">{company.industry}</p>
        <p className="mb-2">{company.location}</p>
        <p>{company.jobs} Open Jobs</p>

        <Link to="/jobs" className="btn btn-outline-primary btn-sm">
          View Jobs
        </Link>
      </div>
    </div>
  );
}

export default CompanyCard;