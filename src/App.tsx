import { Splash } from './Pages/Splash'
import { Nav } from './Components/Nav/Nav'
import './App.css'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  //init animation package
  useEffect(() => {
    setTimeout(function () { AOS.init(); }, 1000);
  }, [])

  return (
    <div className="App">
      <Router>
        <Nav data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0"/>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
