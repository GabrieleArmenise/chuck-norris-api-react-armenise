import { useState } from 'react'
import '../styles/Title.css'


function Title() {

  const [count, setCount] = useState(0)

  return (
    <div className="Title">
      <h1>Vite</h1>
    </div>
  )
}

export default Title
