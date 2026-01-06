import axios from "axios"
import { useState } from "react";

const Update_form = ({ blog, onUpdated, closeForm }) => {
    const [title, setTitle] = useState(blog.title);
    const [content, setContent] = useState(blog.description);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedBlog = {  title, content };
        try {
            await axios.put(`http://localhost:3000/api/blog/${blog._id}`, updatedBlog);
            onUpdated();
            closeForm()
        } catch (err) {
            console.log(err.response?.data || err.message);
        }
    }
    return (
        <>
            <form onSubmit={handleUpdate}>
                <h3>Edit Blog</h3>

                <input type="text" value={title} name='title' placeholder='Enter a title' onChange={(e) => setTitle(e.target.value)} />

                <textarea
                    placeholder="Description"
                    value={content}
                    onChange={(e) => setDesc(e.target.value)}
                />

                <button type="submit">Update</button>
                <button type="button" onClick={closeForm}>Cancel</button>

            </form>
        </>
    )
}

export default Update_form