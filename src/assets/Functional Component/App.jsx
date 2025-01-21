/*import Home from './assets/Functional Component/Home'
import About from './assets/Functional Component/About'
import Gallery from './assets/Functional Component/gallery'
import ClassCompEG from './assets/Class Component/ClassCompEG'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Home/>
      <About/>
      <ClassCompEG/>
      <Gallery page="gallery" img="SECE logo"/>
      <Gallery page="gallery" img="SECE logo"/>
      </div>
    </>
  )
}

export default App */

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './components/FunctionalComponents/About';
import ClassCompEG from './assets/Class Component/ClassCompEG'
import Gallery from './components/FunctionalComponents/Gallery';
import Home from './components/FunctionalComponents/Home';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/"element={<Home />}></Route>
      <Route path="/about"element={<About />}></Route>
      <Route path="/gallery"element={<Gallery page="Gallery" image="SECE Logo" />}></Route>
      <Route path="/contact"element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

