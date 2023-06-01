import { Splash } from './Pages/Splash'
import { Nav } from './Components/Nav/Nav'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Splash />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
