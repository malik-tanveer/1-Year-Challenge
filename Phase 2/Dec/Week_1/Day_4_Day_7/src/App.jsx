import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Packed from './components/Packed';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Day_4 from "./components/Day_4";
import Day_6 from "./components/Day_6";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";


function App() {

  return (
    <>
    <Navbar/>
      <div className="day-4">
        <Day_4/>
      </div>
      <div className='Day-5'>
        {/* <Packed /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
        </Routes>
        <Login />
      </div>
      <div className="Day-6">
        <Day_6 />
      </div>
      
    </>
  )
}

export default App;