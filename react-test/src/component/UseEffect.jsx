import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [counter, setCounter] = useState(1);

    useEffect(()=>{
        // console.log("Empty Dependency")
        alert("Empty Dependecy")
    }, [])

  return (
    <div>
        <h2>UseEffect: Empty Dependecy</h2>
        <h2>Empty Dependecy: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default UseEffect;