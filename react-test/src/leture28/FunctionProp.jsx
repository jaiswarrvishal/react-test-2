import { useState } from "react";
import React from "react";

const FunctionProp = () =>{

//     function HandleClick(){
//         console.log("Clicked")
//     }
//     return(
//         <div>
//             <h1>Function Prop</h1>
//             <ChildrenComponent buttonValue="Clicke Me" HandleClick={HandleClick}/>
//         </div>
//     )
// }

// function ChildrenComponent({buttonValue, HandleClick}){
//     return <button onClick={HandleClick}>{buttonValue}</button>
// }

const [counter, setCounter] = useState(1);
function HandleClick(){
    setCounter(counter+1);
}
function HandleClick1(){
    setCounter(counter-1);
}
return(
    <div>
        <h1>Counter: {counter}</h1>
        <ChildrenComponent Increment="Increment" Decrement="Decrement" HandleClick={HandleClick} HandleClick1={HandleClick1}/>
        {/* <button onClick={()=> setCounter(counter+1)}>+</button> */}
    </div>
    )
}
function ChildrenComponent({Increment, Decrement, HandleClick, HandleClick1}){
    return (
        <div>
            <button onClick={HandleClick}>{Increment}</button>
            <button onClick={HandleClick1}>{Decrement}</button>
        </div>
    )
    
}

export default FunctionProp;