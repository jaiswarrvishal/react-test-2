// import React, { useState } from 'react'

import { useEffect, useState } from "react";



const Test3 = () => {
    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(10);

    // const changeCount = () => {
            // setCount(count + 1)
          // }
         
      useEffect(() => {
        console.log("inside function")
        alert("inside function")
      })
        
  return (
    <div>
        <h1>use-Effect: No dependency</h1>        
        <h2>Count : {count}</h2>        
        <h2>Count2 : {count2}</h2>
        {/* <button onClick={changeCount}>+</button> */}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
    </div>
  )
}

export default Test3;