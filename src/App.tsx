import { ReactElement } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
function App({ children }: {children: ReactElement}) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      { children }
    </div>
  )
}

export default App
