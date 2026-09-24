import { useSearchParams } from "react-router-dom";
import JobCard from "../components/JobCard";
import { jobs } from "../data/data";

function Jobs() {
  const [params] = useSearchParams();
  const search = params.get("search") || "";
  const category = params.get("category") || "";

  const filteredJobs = jobs.filter((job) => {
    const text = `${job.title} ${job.company} ${job.category}`.toLowerCase();

    const matchesSearch = text.includes(search.toLowerCase());
    const matchesCategory =
      !category || job.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="container py-5">
      <h1>Jobs</h1>
      <p className="text-muted">Browse available job opportunities.</p>

      <div className="row g-4 mt-2">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="col-md-6 col-lg-4" key={job.id}>
              <JobCard job={job} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning">
              No jobs found.
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Jobs;