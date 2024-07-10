import React, { useState } from 'react'

const Test1 = () => {

    // const head = "Vishal Techy buddy"
    const [name, setName] = useState("Aniket")  // name update -> string
    // const [count, setCount] = useState(0)
    const changeFoo = () => {
        // const val = "test1 with button";
        // console.log(val)
        // setName("Updated Name")
        // setCount(count+1)  //counter
        // let newVal = name;

        // if(name === "Vishal"){
        //   setName("Nitesh")
        // } else{
        //   setName("Vishal")
        // }
        name === "Aniket" ? setName("Nitesh") : setName("Aniket")
      
    }

    // console.log(name)
  return (
    <div>
        <h2>Name : {name}</h2>
        {/* <h2>Counter : {count}</h2> */}
        <button onClick={changeFoo}>Click</button>
    </div>
  )
}

export default Test1;