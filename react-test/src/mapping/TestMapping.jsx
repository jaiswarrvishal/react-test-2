import React from 'react'

const TestMapping = ({testing}) => {
    console.log(testing)
  return (
    <div>
        <h1>Test-Mapping</h1>
        <div>
            {testing.map((test)=>(
                <h3>{test}</h3>
            ))}
        </div>
    </div>
  )
}

export default TestMapping;