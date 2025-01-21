import Home from './assets/Functional Component/Home'
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
      <Gallery page="gallery" img="sece logo"/>
      </div>
    </>
  )
}

export default App

