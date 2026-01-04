import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If no token → redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children; // allow access
};

export default ProtectedRoute;
