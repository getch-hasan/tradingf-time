import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Remining from './Pages/Remining'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Remining></Remining> 
    </>
  )
}

export default App
