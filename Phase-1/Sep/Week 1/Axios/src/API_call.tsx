import { useEffect, useState } from "react";
import axios from "axios";

// 👇 type define karte hain
interface Post {
  id: number;
  title: string;
  body: string;
}

export default function API_call() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  // ✅ GET: Fetch posts
  const fetchPosts = async () => {
    try {
      const res = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      setPosts(res.data);
    } catch (err) {
      console.error("GET Error:", err);
    }
  };

  // ✅ POST: Add new post
  const addPost = async () => {
    try {
      const res = await axios.post<Post>(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      setPosts([...posts, res.data]);
      setNewPost({ title: "", body: "" });
    } catch (err) {
      console.error("POST Error:", err);
    }
  };

  // ✅ PUT: Update post
  const updatePost = async (id: number) => {
    try {
      const res = await axios.put<Post>(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { title: "", body: "" }
      );
      setPosts(posts.map((p) => (p.id === id ? res.data : p)));
    } catch (err) {
      console.error("PUT Error:", err);
    }
  };

  // ✅ DELETE: Remove post
  const deletePost = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((p) => p.id !== id));
    } catch (err) {
      console.error("DELETE Error:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📌 Axios CRUD Example</h1>

      {/* Add Post */}
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button onClick={addPost}>Add Post</button>
      </div>

      {/* Posts List */}
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>: {post.body}
            <br />
            <button onClick={() => updatePost(post.id)}>Update</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
