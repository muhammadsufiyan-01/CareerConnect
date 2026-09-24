import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container py-5 text-center">
      <h1 className="display-1">404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
    </main>
  );
}

export default NotFound;