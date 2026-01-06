import {Routes , Route} from "react-router-dom";
import Create_form from "./components/Create_form"
import Update_form from "./components/Update_form";
import Fetch_from from "./components/Fetch_from";

function App() {

  return (
    <>
    <Routes>
      <Route path='/get' element={<Fetch_from/>} />
      <Route path='/add' element={<Create_form/>} />
      <Route path='/put' element={<Update_form/>} />
    </Routes>
    </>
  )
}

export default App
