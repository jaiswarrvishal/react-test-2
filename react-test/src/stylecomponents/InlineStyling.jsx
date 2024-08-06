import React from 'react'
import "./../stylecomponents/ExternalStyle.css";

const InlineStyling = () => {
    // const style = {
    //    color:"blue",
    //     fontSize:"28px" 
    // }
  return (
    <div>
    <div style={{
        color:"orange",
        fontSize:"28px"
    }}>
    {/* <h1 style={style}>InlineStyling</h1> */}
    <h1>InlineStyling</h1>
    </div>
        <div>
            <p className='my-class'>External Styling</p>
        </div> 
    </div>
  )
}

export default InlineStyling;