import { useState } from 'react'
import './styles/App.css'
import Title from './component/Title.jsx'
import Button from './component/Button.jsx'
import Dropdown from './component/Dropdown.jsx'
import JokeText from './component/JokeText.jsx'

function App() {

  const [joke, setJoke] = useState("");

  const [categories, setCategories] = useState([]);

  const [clicked, setClicked] = useState(false);

  let url = "https://api.chucknorris.io/jokes/categories";

  fetch(url).then((resp)=>{
    return resp.json();
  }).then(data=>{

    data.unshift("random");
    setCategories(data);
  }).catch((e)=>{

    console.log(e)
  })




  function generateJoke(){

    let selectedCategory = document.getElementById("dropdown").value
    let url = "https://api.chucknorris.io/jokes/" + (selectedCategory==="random"?"random":("random?category=") + selectedCategory);
    fetch(url).then((resp)=>{
      return resp.json();
    }).then(data=>{
      setJoke(data.value);
      setClicked(true);
    }).catch((e)=>{
      console.log(e)
    })
  }



  function copyJoke(){
    let jokeText = document.getElementById("JokeText");
    navigator.clipboard.writeText(jokeText.innerText);
  }




  return (
    <div className="App">
      <Title>Chuck Norris Joke Generator</Title>
   
            <Button id='generate' callback={generateJoke}>Genera Joke</Button><br></br>
            <b><Dropdown id='dropdown' values={categories}></Dropdown></b>
            <br></br>
         
            


          <Button id='clipboard' callback={copyJoke} variant={clicked === true ? undefined : "disabled"}>Copy</Button>
          <JokeText id='JokeText'>{joke}</JokeText>
    </div>
  )
}

export default App