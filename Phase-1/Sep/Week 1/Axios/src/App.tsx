import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/Auth";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        
        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/auth" />}
        />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to={user ? "/dashboard" : "/auth"} />} />
      </Routes>
    </Router>
  );
};

export default App;
