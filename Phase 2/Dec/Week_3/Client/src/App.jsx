import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
          <Home />
        </ProtectedRoute>} />


        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App;