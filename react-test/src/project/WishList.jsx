import React from 'react'
import { useNavigate } from 'react-router-dom';

const WishList = () => {
    const router = useNavigate();
  return (
    <div>
        <h3>WishList</h3>
        <form style={{width:"400px", height:"300px", border:"1px solid red", margin:"auto"}}><br/>
        <label>Add more items</label><br/><br/><br/>
            <input style={{width:"80%", padding:"10px"}} type='text' placeholder='Enter your name'/>
        <label></label><br/>
            <input style={{width:"80%", padding:"10px"}} type='number' placeholder='Enter your contact number'/>
        <label></label><br/><br/><br/>
            <button id='btn' style={{width:"60%", padding:"10px"}} type='submit' placeholder='Enter your contact number'>Buy Now</button>
        </form> <br/><br/>
        <button onClick={() => router("/all-product")}>Go to All Products Page</button>
    </div>
  )
}

export default WishList;