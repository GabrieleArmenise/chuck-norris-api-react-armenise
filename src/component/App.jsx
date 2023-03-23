import { useState } from 'react'
import Title from './Title'
import './styles/App.css'
import Button from './Button';


function App() {

  const [count, setCount] = useState(0)


  const [joke, setJoke] = useState("")


  let loadJokeCallback = function(){
    console.log()
  }

  return (
    <div className="App">



      <Title>Chuck Norris API Joke Generation</Title>

      <p> Lorem, ipsum...</p>

      <div class="card">

        <button onClick ={() => setCount (( count) => count + 1 )}>

        count is {count}

        </button>

        <Button text="Carica Joke" callback={loadTextCallback}></Button>

        <Button text="Copia Joke" variant = {joke=== "" ? "disabled" : undefined} callback={copyTextCallback}></Button>

        <Button variant={ joke === "" ? "hover" : undefined } calllback={loadTextCallback}></Button>


      </div>
     
    </div>
  )
}

export default App
