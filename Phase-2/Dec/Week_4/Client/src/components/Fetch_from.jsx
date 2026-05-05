import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Update_form from "./Update_form";

const Fetch_from = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const res = await axios.get("http://localhost:3000/api/blog");
    setBlogs(res.data);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/blog/${id}`);
      fetchBlog();
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All Blogs
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition"
          >
            <p className="text-gray-600 mt-1">{blog.author}</p>
            <p className="text-xs text-gray-400">ID: {blog._id}</p>

            <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>

            <p className="text-gray-600 mt-1">{blog.content}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleDelete(blog._id)}
                className="px-4 py-1 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600"
              >
                Delete
              </button>

              <button
                onClick={() => setEditingBlog(blog)}
                className="px-4 py-1 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      <Link to="/add" className=" pt-10 text-center text-blue-600 underline-none">I Just Create a Data</Link>
      </div>

      {editingBlog && (
  <Update_form
    item={editingBlog}
    onUpdated={fetchBlog}
    closeForm={() => setEditingBlog(null)}
  />
)}
    </div>
  );
};

export default Fetch_from;
