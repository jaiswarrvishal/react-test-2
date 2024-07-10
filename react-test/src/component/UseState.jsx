import React from 'react'

const UseState = () => {

    let val = "Vishal Subs"
    const changeName = () => {
        val = "Technical Vishal";
        console.log(val)
    }

    // console.log(val)
  return (
    <div>
        <h1>{val}</h1>
        <button onClick={changeName}>Click Me</button>
    </div>
  )
}

export default UseState;