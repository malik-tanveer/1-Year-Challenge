import Reducer from './Advanced_hooks/Reducer';
import Ref from './Advanced_hooks/Ref';
import './App.css'

function App() {

  return (
    <>
    <div className="ref">
      <h1>Useref</h1>
    <Ref/>
    </div>
    <div className="reducer">
      <Reducer/>
    </div>
    </>
  )
}

export default App;