import { useState } from 'react'
import './App.css'
import Title from './component/Title';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Title></Title>
     
    </div>
  )
}

export default App
