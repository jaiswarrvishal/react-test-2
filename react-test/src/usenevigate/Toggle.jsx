import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Toggle = () =>{

    const [name, setName] = useState("Deepika")
    const router = useNavigate()

    return(
        <div>
            <h3>Hello, {name}</h3>
            <button onClick={()=> name === "Deepika" ? setName("Deepak") : setName("Deepika")}>Change Name</button> <br/><br/>
            <button onClick={()=> router("/test1")}>Change Navigation</button>
        </div>
    )
}
export default Toggle;