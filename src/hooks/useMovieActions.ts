import axios from 'axios';

const useMovieActions = () => {
  const handleAddMovie = async (user: string, movieId: string) => {
    try {
      const response = await axios.post("http://localhost:5000/moviesEdit", {
        user,
        action: 'add',
        movieId,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Błąd podczas dodawania filmu:', error);
    }
  };

  const handleRemoveMovie = async (user: string, movieId: string) => {
    try {
      const response = await axios.post("http://localhost:5000/moviesEdit", {
        user,
        action: 'remove',
        movieId,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Błąd podczas usuwania filmu:', error);
    }
  };

  return { handleAddMovie, handleRemoveMovie };
};

export default useMovieActions;