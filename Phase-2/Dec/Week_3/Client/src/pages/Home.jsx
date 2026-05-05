import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
const handleLogout = () =>{
  localStorage.removeItem("token");
  navigate('/login');
}
  return (

    <>
      <h1>Welcome to Home Page</h1>
      <p>You are logged-in and authorized 🎯</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Home;
