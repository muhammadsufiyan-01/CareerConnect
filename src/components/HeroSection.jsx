import SearchBar from "./SearchBar";

function HeroSection() {
  return (
    <section className="simple-hero">
      <div className="container">
        <h1>Find Your Next Job</h1>
        <p>Search for jobs and discover new career opportunities.</p>
        <SearchBar />
      </div>
    </section>
  );
}

export default HeroSection;