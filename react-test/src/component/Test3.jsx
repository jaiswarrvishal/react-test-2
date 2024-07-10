import React, { useState } from 'react'

const Test3 = () => {
    const [count, setCount] = useState(1);

    const changeCount = () => {
     
            setCount(count + 1)
        
    }
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={changeCount}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Test3;