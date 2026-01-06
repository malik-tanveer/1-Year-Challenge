import axios from 'axios';
import { useState } from 'react'

const Create_form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const form = { title, content, author };

    try {
      const res = await axios.post("http://localhost:3000/api/blog", form,);
      console.log("Created:", res.data);

      setTitle("");
      setContent("");
      setAuthor("");
    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create From</h2>
        <input type="text" value={title} name='title' placeholder='Enter a title' onChange={(e) => setTitle(e.target.value)} />
        <textarea

          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="text" value={author} name='email' placeholder='Enter a author name' onChange={(e) => setAuthor(e.target.value)} />

        <button type='submit'>Create</button>
      </form>
    </>
  )
}

export default Create_form