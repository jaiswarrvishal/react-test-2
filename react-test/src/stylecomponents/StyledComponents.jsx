import React from 'react'
import styled from "styled-components";

const MyElements = styled.p`
font-size: 40px;
font-weight: bold;
color: red;
`

const MyElementsH = styled.h1`
font-size: 30px;
font-weight: bolder;
color: green;
`
const StyledComponents = () => {
  return (
    <div>
        <p>Styled Components</p>
        {/* <h1>Styled Components with h1</h1> */}
        <MyElements>StyledComponents</MyElements>
        <MyElementsH>StyledComponents</MyElementsH>
    </div>
  )
}

export default StyledComponents;