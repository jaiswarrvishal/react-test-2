import React, { useState } from 'react'

const Counter = () => {

    const [ counter, setCounter] = useState(1);
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(1)}>reset</button>
    </div>
  )
}

export default Counter;