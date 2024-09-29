import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/footer'

function App() {
 
 const [state, setstate] = useState(0)
  return (
    <>
    <Navbar/>
    <div className='m-auto'>

    <Manager/>
    </div>
    <Footer/>
     
    </>
  )
}

export default App
