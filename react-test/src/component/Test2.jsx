import React, { useState } from 'react'

const Test2 = () => {

    // const [counter, setCounter] = useState(10);
    // const [name, setName] = useState("Hey Buddy!", "Hello!");
    const [name, setName] = useState(["Hey Buddy!", "Hello!"]);

    const update = () => {
        // setCounter(counter + 1);
        setName("Silenced");
    }
    
    // console.log(counter);
    console.log(name);

  return (
    <div>
        {/* <h1>Counter : {counter}</h1> */}
        {/* <h1>Update Name : {name}</h1> */}
        <h1>Update Name : {name[1]}</h1>  
        <button onClick={update}>Click Here</button>
    </div>
    
  )
}

export default Test2;

// Const [state, setState] = useState (true); 

// Return (
// <>
// {state? vinod thapa : thapa technical}
// <button onClick={()=>setState(!state)}>click me<button/>

// </> );