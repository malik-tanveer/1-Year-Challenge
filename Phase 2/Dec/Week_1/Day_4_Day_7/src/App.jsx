import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Click from './components/Click'
import Packed from './components/Packed';
import Del from './components/Del';
import Input from './components/Input';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Toggle from './components/Toggle';
import Keys from "./components/Keys";
import List from "./components/List";


function App() {

  return (
    <>
      {/* <BrowserRouter> */}
      <div className="day-4">

        <Click />
        <Input />
        <Del />
        <Toggle />
      </div>
      <div className='Day-5'>
        <Packed/>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
        <Login />
      </div>
      <div className="Day-6">
        <Keys />
        <List />
      </div>
      {/* </ BrowserRouter> */}
    </>
  )
}

export default App;