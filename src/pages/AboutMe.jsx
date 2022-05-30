import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutMe() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const res = await fetch("http://localhost:1337/api/about-mee");
    const blogs = await res.json();
    setBlogs(blogs.data);
    console.log(blogs.data);
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="about-content">
      <span className="tablee">ABOUT ME</span>
      {blogs.map((blog, index) => (
        <div className="abouts" key={index}>
          {blog.attributes.Blog}
          {/* {blog.attributes.createdAt} */}
        </div>
      ))}
    </div>
  );
}

export default AboutMe;
