import CompanyCard from "../components/CompanyCard";
import { companies } from "../data/data";

function Companies() {
  return (
    <main className="container py-5">
      <h1>Companies</h1>
      <p className="text-muted">Explore companies and their open jobs.</p>

      <div className="row g-4 mt-2">
        {companies.map((company) => (
          <div className="col-md-6 col-lg-3" key={company.id}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Companies;