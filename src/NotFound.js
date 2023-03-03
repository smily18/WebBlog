import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Error 404</h2>
      <p>Page not found</p>
      <Link to="/">Back To Home Page</Link>
    </div>
  );
};

export default NotFound;
