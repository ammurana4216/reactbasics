import { useState } from "react";

function Header(){
    //let isVisible= ture;
    const [state,setState]=useState("hello");
    const [isVisible,setIsVisible]=useState(false);
      const toggleElement =()=>{
        setState("Bye");
        setIsVisible(true);
        
}
 return(
    <div>
        <h2>{state}Header</h2>
        <button onClick={toggleElement}>Toggle</button>
        {
            isVisible? <p>This is para 1</p>:<p>This is para 2</p>
        }
    </div>
 )
    }
    export default Header;

    