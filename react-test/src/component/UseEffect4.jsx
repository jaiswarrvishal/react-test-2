import React, { useEffect, useState } from 'react'

const UseEffect4 = () => {

    const [count, setCount] = useState(1);
    const [isUserLogged, setIsUserLogged] = useState(true);

    function switchFlag(){
        // setIsUserLogged(prevState => !prevState)
        setIsUserLogged(anyThink => !anyThink)
    }

    useEffect(()=>{
        alert("Multiple Dependency")
    }, [count, isUserLogged])
  return (
    <div>
        {/* {isUserLogged ? <h3 onClick={switchFlag}>Welcome!: Logout?</h3> : <h3 onClick={switchFlag}>Login</h3>} */}
        {isUserLogged ? <button onClick={switchFlag}>Welcome!: Logout?</button> : <button onClick={switchFlag}>Login</button>}
        <h2>UseEffect4: {count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(1)}>Reset</button>
    </div>
  )
}

export default UseEffect4;