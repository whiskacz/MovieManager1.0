import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrivateList = () => {
    
    const [privateMoviesId, setPrivateMoviesId] = useState<number[]>([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("http://localhost:5000/moviesEdit");
                setPrivateMoviesId(response.data.movies);
            } catch(error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies()
    }, [])
 
    
    return (
      <>
      <div>PrivateList</div>
      <div>{privateMoviesId}</div>
      </>
    )
  }
  
  export default PrivateList