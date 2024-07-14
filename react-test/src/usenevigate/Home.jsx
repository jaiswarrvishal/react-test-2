import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const router = useNavigate();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={()=> router("/use-navigate")}>Go to useNavigate Page</button>
    </div>
  )
}

export default Home;