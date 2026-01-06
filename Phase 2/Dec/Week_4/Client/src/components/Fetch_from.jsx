import axios from 'axios';
import { useEffect, useState } from "react"
import Update_form from './Update_form';

const Fetch_from = () => {
    const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

    useEffect(() => {
        fetchBlog();
    }, []);

    const fetchBlog = async () => {
        const res = await axios.get("http://localhost:3000/api/blog");
        setBlogs(res.data);
    }

      const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/blog/${id}`);
      fetchBlog();
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

    return (
        <>
            {blogs.map((blog) => {
                return (
                    <div key={blog._id}>
                        <h1>{blog._id}</h1>
                        <h3>{blog.title}</h3>
                        <h1>{blog.content}</h1>


                          <button onClick={() => handleDelete(item._id)}>Delete</button>
    
                        <button onClick={() => setEditingBlog(blog)}>
                            Edit
                        </button> 
                        

                    </div>
                )
            })}
            {editingBlog && (
                <Update_form
                    item={editingBlog}
                    onUpdated={fetchBlog}
                    closeForm={() => setEditingItem(null)}
                />
            )}
        </>
    )
}

export default Fetch_from