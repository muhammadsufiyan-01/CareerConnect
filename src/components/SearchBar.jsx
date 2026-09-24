import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim()) {
      navigate(`/jobs?search=${encodeURIComponent(value.trim())}`);
    } else {
      navigate("/jobs");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Job title or keyword"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}

export default SearchBar;