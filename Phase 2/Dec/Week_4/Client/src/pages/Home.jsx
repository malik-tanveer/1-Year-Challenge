import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full text-center space-y-4">

        <h1 className="text-2xl font-bold text-indigo-700">
          Welcome to Your Blog Dashboard
        </h1>

        <p className="text-gray-600">
          Manage your blog posts easily — create new content or view existing
          posts. Stay organized and keep your ideas flowing ✨
        </p>

        <div className="flex gap-4 justify-center mt-4">
          <button
            onClick={() => navigate("/get")}
            className="px-5 py-2 rounded-lg border border-indigo-500 text-indigo-600 font-medium hover:bg-indigo-50 transition"
          >
            See Blogs
          </button>

          <button
            onClick={() => navigate("/add")}
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Create Blog
          </button>
        </div>

        <hr className="my-4" />

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
