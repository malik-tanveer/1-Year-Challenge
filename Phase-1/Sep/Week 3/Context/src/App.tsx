import './App.css'
import { ThemeProvider } from './components/ThemeContext'
import Home from './pages/Home'

function App() {

  return (
    <>
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
    </>
  )
}

export default App
