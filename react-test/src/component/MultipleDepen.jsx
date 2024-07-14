import React, { useEffect, useState } from 'react'

const MultipleDepen = () => {

    const [counter, setCounter] = useState(1);
    const [message, setMessage] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    function anyThink(){
      setIsLogged(prevValue => !prevValue);
    }

    useEffect(() => {
        
        alert("multiple dependency");
        setMessage(counter > 10 && counter < 20 ? 'counter is in between 10-20' : 'counter is out of range');
      }, [counter, isLogged]);
    
  return (
    <div>
        <h2>Multiple Dependency :{counter}</h2>
        <h2>Message :{message}</h2>
        <button onClick={()=> setCounter(counter + 1)}>Increment</button>
        <button onClick={()=> setCounter(counter - 1)}>Decrement</button>
        <button onClick={()=> setCounter(1)}>Reset</button> <br /><br />
        {isLogged ? <button onClick={anyThink}>Welcome!</button> : <button onClick={anyThink}>Login.</button>}
    </div>
  )
}

export default MultipleDepen;