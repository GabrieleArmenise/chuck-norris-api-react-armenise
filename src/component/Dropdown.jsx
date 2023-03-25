import {useState} from 'react'
import reactLogo from '.assets/react.svg'


function Dropdown({ options , variant}){
    let classRenderer = function(){
        let classes = [
            "Dropdown", variant
        ]

        return classes.join(" ")
        
    }

    return(

        <div className={classRenderer()}>
        <select name="JokeType" id="JokeType" defaultValue={"Scegli un'opzione"}>
        <option disabled> Scegli un'opzione </option>
        {options.map((ele, id) => {return <option key={id} value={ele}>{ele}</option>})}

        </select>
        </div>
    )
}