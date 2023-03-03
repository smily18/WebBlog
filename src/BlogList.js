import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-items">
      <h1>{title}</h1>
      <div className="homepage">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
