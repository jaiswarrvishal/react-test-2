import React from 'react'

const TestMapp = ({numbers}) => {
    console.log(numbers);
  return (
    <div><h1>TestMapp</h1>
        <div>
            {numbers.map((number)=>(
                <h2>{number}</h2>
            ))}
        </div>
    </div>
  )
}

export default TestMapp;