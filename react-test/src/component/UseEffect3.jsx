import React, { useEffect, useState } from 'react'

const UseEffect3 = () => {

    const [counter, setCounter] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        alert("single dependency")
    }, [counter])
  return (
    <div>
        {/* {condition ? 1st statement : 2nd statement} */}
        {isLoggedIn ? <h3>Welcome!</h3> : <h3>Please Login...</h3>}
        <h1>UseEffect- Single dependency: {counter}</h1>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default UseEffect3;