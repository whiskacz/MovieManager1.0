import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieData } from '../interfaces/interface';

const MovieListComponent: React.FC = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/movies'); 
        setMovies(response.data);
      } catch (error) {
        console.error('Błąd pobierania filmów:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Lista filmów</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>Title: {movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListComponent;
