import './App.css'
import ControlledForm from './pages/Controlles'
import Uncontrolled from './pages/Uncontrolled'

function App() {

  return (
    <>
      <div className="controleed">
        <h1>Controlled</h1>
        <ControlledForm />
      </div>
      <div className="uncontrolled">
        <h1>Unccontroleed </h1>
        <Uncontrolled/>
      </div>
    </>
  )
}

export default App
