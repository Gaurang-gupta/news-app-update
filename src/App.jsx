import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
function App({ children }) {
  const [clicked, setClicked] = useState("")
  return (
    <div className="bg-gray-100">
      <Navbar clicked={clicked} setClicked={setClicked}/>
      { children }
    </div>
  )
}

export default App
