import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllProduct = () => {

    const [allProducts, setAllProducts] = useState([]);
    console.log(allProducts, "allProducts")

    async function GetProducts(){
        // alert("Hii from GetProducts")
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            // console.log(response)
            setAllProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        // alert("Hii")
        //call api from backend
        GetProducts()
    }, [])

    const router = useNavigate();
  return (
    <div >
        <h1>All-Products</h1>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
            {allProducts.map((product) =>(
                <div style={{
                    width:"20%", 
                    height:"450px", 
                    border:"1px solid lightgray", 
                    marginTop:"10px", borderRadius:"5px", 
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    overflow:"hidden"
                    }}>
                    <img style={{width:"70%", height:"50%",padding:"5px"}} src={product.image} />
                    <h6>Title: {product.title}</h6>
                    <p>Catagory: {product.category}</p>
                    <p>Price: {product.price}/-</p>
                    <button style={{width:"80%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}  onClick={() => router("/wish-list")}>WISHLIST</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllProduct;