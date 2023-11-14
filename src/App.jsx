
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Sheard/Footer/Footer'

function App() {

  return (
    <>
      <h1>hello world</h1>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
