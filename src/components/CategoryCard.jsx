import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/jobs?category=${encodeURIComponent(category.name)}`}
      className="category-card"
    >
      <strong>{category.name}</strong>
      <small>{category.jobs} Jobs</small>
    </Link>
  );
}

export default CategoryCard;