import { useState } from 'react'
import GetTo100 from './Componnents/GetTo100'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <GetTo100/>    
    </>
  )
}

export default App
