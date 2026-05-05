import { useState } from "react";
import axios from "axios";

const Update_form = ({ item, onUpdated, closeForm }) => {
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const [author, setAuthor] = useState(item.author);
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:3000/api/blog/${item._id}`,
        { title, content }
      );

      setMessage("Blog updated successfully");

      onUpdated();    // refresh list
      closeForm();    // close popup

    } catch (err) {
      setMessage(err.response?.data?.message || "Update failed");
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <form
        onSubmit={handleUpdate}
        className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Edit Blog</h2>

        {message && (
          <div className="bg-yellow-100 text-yellow-700 p-2 rounded">
            {message}
          </div>
        )}

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg h-28"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg"
        />

        <div className="flex justify-between mt-3">
          <button
            type="button"
            onClick={closeForm}
            className="px-4 py-2 rounded-lg bg-gray-300"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update_form;
