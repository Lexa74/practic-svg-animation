import './App.css'
import {Burger} from "./UI/Burger/Burger";
import {useState} from "react";

function App() {
    const [isActive, setIsActive] = useState(false)
  return (
    <>
        <header>
            <div onClick={() => setIsActive(!isActive)} >
                <Burger width={40} isActive={isActive}/>
            </div>

        </header>
        <svg className={`svg1 ${isActive ? 'active' : ''}`} xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 10 10">
            <path d="M4,1 Q7,1 7,4 M7,4 Q7,7 4,7 M4,7 Q1,7 1,4 M1,4 Q1,1 4,1"/>
        </svg>
    </>
  )
}

export default App
