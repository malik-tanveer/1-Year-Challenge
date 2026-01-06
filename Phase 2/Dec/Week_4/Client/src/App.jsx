import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Create_form from "./components/Create_form";
import Fetch_from from "./components/Fetch_from";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />

        <Route path='/add' element={
          <ProtectedRoute>
          <Create_form />
          </ProtectedRoute>
          } />
        <Route path='/get' element={
          <ProtectedRoute>
          <Fetch_from />
          </ProtectedRoute>
          } />
        {/* <Route path='/put' element={<Update_form/>} /> */}


        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App;