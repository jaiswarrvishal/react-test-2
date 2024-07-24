import React, { useState } from "react";

const FunctionalCounter = () =>{
    const [counter, setCounter] = useState(1);
    function HandleClick(){
        setCounter(counter+1);
    }
    
    function HandleClick1(){
        setCounter(counter-1);
    }

    function HandleClick2(){
        setCounter(1);
    }
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <ChildComponent Increment="Increment" Decrement="Decrement" Reset="Reset" HandleClick={HandleClick} HandleClick1={HandleClick1} HandleClick2={HandleClick2}/>
        </div>
    )
}

function ChildComponent({Increment, Decrement, Reset, HandleClick, HandleClick1, HandleClick2}){
    return(
        <div>
            <button onClick={HandleClick}>{Increment}</button>
            <button onClick={HandleClick1}>{Decrement}</button>
            <button onClick={HandleClick2}>{Reset}</button>
        </div>
    )
}
export default FunctionalCounter;