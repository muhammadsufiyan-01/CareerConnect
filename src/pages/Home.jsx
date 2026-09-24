import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import JobCard from "../components/JobCard";
import CompanyCard from "../components/CompanyCard";
import CategoryCard from "../components/CategoryCard";
import { jobs, companies, categories } from "../data/data";

function Home() {
  return (
    <>
      <HeroSection />

      <main className="container py-5">
        <div className="section-title">
          <h2>Popular Categories</h2>
          <Link to="/jobs">View All</Link>
        </div>

        <div className="row g-3 mb-5">
          {categories.map((category) => (
            <div className="col-6 col-md-4 col-lg-2" key={category.id}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>

        <div className="section-title">
          <h2>Featured Jobs</h2>
          <Link to="/jobs">View All</Link>
        </div>

        <div className="row g-4 mb-5">
          {jobs.map((job) => (
            <div className="col-md-6 col-lg-4" key={job.id}>
              <JobCard job={job} />
            </div>
          ))}
        </div>

        <div className="section-title">
          <h2>Companies</h2>
          <Link to="/companies">View All</Link>
        </div>

        <div className="row g-4">
          {companies.map((company) => (
            <div className="col-md-6 col-lg-3" key={company.id}>
              <CompanyCard company={company} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;