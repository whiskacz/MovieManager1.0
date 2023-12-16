import { useState } from 'react';
import axios from 'axios';
import { MovieData } from '../interfaces/interface';

const useMovieActions = () => {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showRemoveMessage, setShowRemoveMessage] = useState(false);
    
    const handleAddMovie = async (user: string, movieData : MovieData) => {
        try {
            const response = await axios.post("http://localhost:5000/moviesEdit", {
                user,
                action: 'add',
                movieData,
            });

            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
                }, 2000);
            
            console.log(response)
                    
        } catch (error) {
            console.error('Błąd podczas dodawania filmu:', error);
        }
    };

    const handleRemoveMovie = async (user: string, movieData: MovieData) => {
      try {
            const { id } = movieData;
            const response = await axios.post("http://localhost:5000/moviesEdit", {
                user,
                action: 'remove',
                movieData: { id }, 
            });

            setShowRemoveMessage(true);
            setTimeout(() => {
                setShowRemoveMessage(false);
                }, 2000);

            console.log(response)
                  
      } catch (error) {
          console.error('Błąd podczas usuwania filmu:', error);
      }
  };

    return { 
        handleAddMovie, 
        handleRemoveMovie, 
        showSuccessMessage, 
        showRemoveMessage 
    };
};

export default useMovieActions;
