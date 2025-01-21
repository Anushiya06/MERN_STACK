import './App.css'
import Home from './assets/Functional Component/Home';
import About from './assets/FunctionalComponents/About';
import Gallery from './assets/FunctionalComponents/gallery';
import Contact from './assets/FunctionalComponents/Contact';
import Navbar from './assets/FunctionalComponents/Navbar';
import Signup from './assets/FunctionalComponents/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/gallery" element={<Gallery page="Gallery" img ="time"/>} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/signup" element={<Signup />} ></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App