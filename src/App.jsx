
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Sheard/Footer/Footer'
import Navbar from './Sheard/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
