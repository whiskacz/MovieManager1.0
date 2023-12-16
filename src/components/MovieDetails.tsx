import React, { useEffect, useState } from 'react';
import { BsPlusCircle, BsXCircle, BsXLg } from "react-icons/bs";
import { useLocation, Link } from 'react-router-dom';
import { MovieData } from '../interfaces/interface';
import { useSelector } from 'react-redux';
import { StateMovieSection } from '../interfaces/interface';
import useMovieActions from '../hooks/useMovieActions';
import axios from 'axios';

const MovieDetails = () => {

  const [movieDetails, setMovieDetails] = useState<MovieData | null>(null);
  const [movieId, setMovieId] = useState<string | null>(null);
  const loggedUser = useSelector((state: StateMovieSection) => state.loggedUser.loggedUser)
  const { handleAddMovie, handleRemoveMovie, showSuccessMessage, showRemoveMessage } = useMovieActions();
  const location = useLocation();

  const {
      title,
      popularity,
      poster_path,
      homepage,
      overview,
      release_date,
    } = movieDetails || {};
    

  useEffect(() => {
    const managerData = location.pathname.split('manager/')[1];
    setMovieId(managerData);
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      if (movieId) {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzk2MDU2MjVhMTgzNzc5YzRmNjYxNGRiZWIzYTg4YyIsInN1YiI6IjY1NDI0NmMzMTM2NTQ1MDBhZTQ2OTY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kcDSwgHd1n2A6uKck6jK8U8Hu4PtORmyr6HcvjPoxEQ'
            }
          });
          setMovieDetails(response.data);
        } catch (error) {
          console.error('Błąd pobierania danych:', error);
        }
      }
    };

    fetchData();
  }, [movieId]);

  const handleAddToCollection = async () => {
    if (loggedUser && movieDetails) {
        handleAddMovie(loggedUser, movieDetails);
    }
};

const handleRemoveFromCollection = async () => {
    if (loggedUser && movieDetails) {
        handleRemoveMovie(loggedUser, movieDetails); // I tutaj również
    }
};

  return (
    <div className='movieDetailsBackground'
    style={{ 
        backgroundImage: `linear-gradient(rgba(0, 78, 152, 0.6), 
        rgba(0, 78, 152, 0.6)), 
        url(https://image.tmdb.org/t/p/original${poster_path})`,
    }}>
      {movieDetails !== null && (
        <main className='movieDetailsContainer'>
          <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie poster" />
          <div className='movieDetailsInfoContainer'>
            <span>{title}</span>
            <span>{overview}</span>
            <span>Released {release_date}</span>
            <span>Popularity {popularity}</span>
            <a href={homepage}>{homepage}</a>
            <div className='movieDetailsButtonContainer'>
                <BsPlusCircle 
                title="Add movie to your collection" 
                className='movieDetailsButtons' 
                onClick={handleAddToCollection}
                />
                <span>Add movie</span> 
            </div>
            <div className='movieDetailsButtonContainer'>
                <BsXCircle 
                title="Remove from your collection" 
                className='movieDetailsButtons'
                onClick={handleRemoveFromCollection} 
                />
                <span>Remove movie</span> 
            </div>
          </div>
        </main>
        
      )}
      <Link to={'/manager'}>
        <BsXLg className='closeButton'/>
      </Link>
      {(showSuccessMessage && (
        <div className='addRemovePopUp'>
          Movie successfully added
        </div>
      )) || (
        showRemoveMessage && (
          <div className='addRemovePopUp'>
            Movie successfully removed
          </div>
      ))}
    </div>
    
  );
};

export default MovieDetails
