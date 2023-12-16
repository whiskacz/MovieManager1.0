import axios from 'axios';
import { MovieData } from '../interfaces/interface';

const useMovieActions = () => {
    const handleAddMovie = async (user: string, movieData : MovieData) => {
        try {
            const response = await axios.post("http://localhost:5000/moviesEdit", {
                user,
                action: 'add',
                movieData,
            });

            console.log(response.data);
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
  
          console.log(response.data);
      } catch (error) {
          console.error('Błąd podczas usuwania filmu:', error);
      }
  };

    return { handleAddMovie, handleRemoveMovie };
};

export default useMovieActions;
