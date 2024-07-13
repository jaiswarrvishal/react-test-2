import React, { useEffect, useState } from 'react'

const MultipleDepen = () => {

    const [counter, setCounter] = useState(1);
    const [message, setMessage] = useState("");

    useEffect(() => {
        
        alert("multiple dependency");
        setMessage(counter > 10 && counter < 20 ? 'counter is in between 10-20' : 'counter is out of range');
      }, [counter]);
    
  return (
    <div>
        <h2>Multiple Dependency :{counter}</h2>
        <h2>Message :{message}</h2>
        <button onClick={()=> setCounter(counter + 1)}>Increment</button>
        <button onClick={()=> setCounter(counter - 1)}>Decrement</button>
        <button onClick={()=> setCounter(1)}>Reset</button>
    </div>
  )
}

export default MultipleDepen;