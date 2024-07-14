import React from 'react';
import { useNavigate } from 'react-router-dom';

const Routing = () => {

    const router = useNavigate();
  return (
    <div>
        <h2>useNavigate</h2>
        <button onClick={()=> router('/')}>Home Page</button>
    </div>
  )
}

export default Routing;