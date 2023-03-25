import { useState } from 'react'
import Title from './Title'
import '../styles/App.css'
import Button from './Button';


function App() {

  const [count, setCount] = useState(0)


  const [joke, setJoke] = useState("")


  let loadJokeCallback = function(){
    console.log()
  }

  let copyTextCallback = function(){
    async function copyContent(s) {
      try {
        await navigator.clipboard.writeText(s);
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  }

  return (
    <div className="App">



      <Title>Chuck Norris API Joke Generation</Title>

      <p> Lorem, ipsum...</p>

      <div className="card">

        <button onClick ={() => setCount (( count) => count + 1 )}>

        count is {count}

        </button>

        <Button text="Carica Joke" callback={loadJokeCallback}></Button>

        <Button text="Copia Joke" variant = {joke=== "" ? "disabled" : undefined} callback={copyTextCallback}></Button>

        


      </div>
     
    </div>
  )
}

export default App
