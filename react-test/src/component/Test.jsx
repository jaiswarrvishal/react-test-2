import React, { useEffect, useState } from 'react'

const Test = () => {

    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("");

 {/* Assigment && -> if counter is more than 10 and less than 20 then display "counter is in between 10-20" else display "counter is out of range". */}
      {/* {condition ? 1st statement : 2nd statement } */}   
useEffect(() => {
    // if (counter > 10 && counter < 20) {
    //   setMessage('counter is in between 10-20');
    // } else {
    //   setMessage('counter is out of range');
    // }
    alert("multiple dependency");
    setMessage(counter > 10 && counter < 20 ? 'counter is in between 10-20' : 'counter is out of range');
  }, [counter]);

  return (
    <div>
        <h1> Counter: {counter}</h1>
        <h1> Message: {message}</h1>
        <button onClick={()=>setCounter(counter + 1)}>Increment</button>
        <button onClick={()=>setCounter(counter - 1)}>Decrement</button>
        <button onClick={()=>setCounter(0)}>Reset</button>
    </div>
  )
}

export default Test;
