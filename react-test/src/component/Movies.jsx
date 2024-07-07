// import React from 'react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movies = () => {
    const [moviesData, setMoviesData] = useState([]); 
    console.log(moviesData)
    // const [movies, setMovies] = useState('breaking bad'); 
    // const [inputMovies, setInputMovies] = useState('');

    async function GetMoviesData(){
        // const axios = require('axios');
            // setMoviesData(response.data.contents)

            const options = {
                method: 'GET',
                url: 'https://advance-movie-api.p.rapidapi.com/api/v1/streamitfree/search',
                params: {query: 'avatar'},
                headers: {
                  'x-rapidapi-key': '8957246ad2mshdcf0342c8c3af22p172658jsn03bcaee265ca',
                  'x-rapidapi-host': 'advance-movie-api.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  setMoviesData(response.data.contents)
                //   console.log(response.data);
              } catch (error) {
                  console.error(error);
              }

    useEffect(() => {
        GetMoviesData(); 
      }); 
      
    //   const handleSearch = (event) => {
    //     event.preventDefault();
    //     setCity(inputMovies); 
    //   };

}
  return (
    <div style={{textAlign: "center"}}>
       <h1>Movies</h1>
       <div>
       {
        moviesData.map((i, id) =>(
            <div className='movies'>
                <p>{i.Title}</p>
                <img src={i.poster_path} alt='heroImage'/>
            </div>
        )
        )
       }
       
       </div>
    </div>
  )
}
export default Movies;