import axios from 'axios';
import { useState } from 'react'

const Create_form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = { name, email, title, description: desc  };

    try {
      const res = await axios.post("http://localhost:5000/api/items",newItem);
      console.log("Created:", res.data);

      setName("");
      setEmail("");
      setTitle("");
      setDesc("");
    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create From</h2>
        <input type="text" value={name} name='name' placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email} name='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={title} name='title' placeholder='Enter a title' onChange={(e) => setTitle(e.target.value)} />

        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button type='submit'>Create</button>
      </form>
    </>
  )
}

export default Create_form