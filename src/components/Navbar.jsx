import { NavLink } from "react-router-dom";

function Navbar() {
  const getLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold">
          CareerConnect
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav ms-auto">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={getLinkClass}>
              Jobs
            </NavLink>
            <NavLink to="/companies" className={getLinkClass}>
              Companies
            </NavLink>
            <NavLink to="/applications" className={getLinkClass}>
              Applications
            </NavLink>
            <NavLink to="/profile" className={getLinkClass}>
              Profile
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;