import React, { useState } from "react";

function ReactState(props){
    const [title, setTitle] = useState("React State");
    return(
        <div>
<h1> This is title</h1>
        </div>
    )
}
 export default ReactState;