import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import { MovieData } from '../interfaces/interface';
import { useSelector } from 'react-redux';
import { StateMovieSection } from '../interfaces/interface';
import SingleMovie from './SingleMovie';

const MoviesList = () => {
  const [movieData, setMovieData] = useState<MovieData[]>([]);
  const selectedButton = useSelector((state: StateMovieSection) => state.moviesSort.selectedButton);
  const moviesSearch: MovieData[] = useSelector((state: StateMovieSection) => state.moviesSearch.moviesSearchList);
  const [currentData, setCurrentData] = useState<MovieData[]>([]);
  const [sourceFlag, setSourceFlag] = useState<'movieData' | 'moviesSearch' | null>(null);

  const props = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100%)' },
    delay: 1500,
  });

  useEffect(() => {
    if (selectedButton) {
      const fetchData = async () => {
        try {
          const apiKey = '179605625a183779c4f6614dbeb3a88c';
          const language = 'pl';
          const apiUrl = `https://api.themoviedb.org/3/movie/${selectedButton}?language=pl&page=1`;

          const response = await axios.get(apiUrl, {
            params: {
              api_key: apiKey,
              language: language,
            },
          });
          const data = response.data.results;
          setMovieData(data);
          console.log('Movie data updated:', data);
          setSourceFlag('movieData');
        } catch (error) {
          console.error('Błąd pobierania danych:', error);
        }
      };

      console.log('Effect triggered for selectedButton:', selectedButton);
      fetchData();
    }
  }, [selectedButton]);

  useEffect(() => {
    if (sourceFlag === 'movieData') {
      setCurrentData(movieData);
    } else if (sourceFlag === 'moviesSearch' && moviesSearch.length > 0) {
      setCurrentData(moviesSearch);
    } else {
      setCurrentData([]);
    }
  }, [movieData, moviesSearch, sourceFlag]);

  useEffect(() => {
    if (moviesSearch.length > 0 && currentData === moviesSearch) {
      setCurrentData(moviesSearch);
      setSourceFlag('moviesSearch');
    }
  }, [currentData, moviesSearch]);

  return (
    <animated.main className='mainMoviesListContainer' style={props}>
      {currentData.length > 0 ? (
        currentData.map((element) => (
          <SingleMovie key={element.id} data={element} />
        ))
      ) : (
        <span className='flexColumnCenter'>
          <div>Choose your list</div>
          <div>or find something new!</div>
        </span>
      )}
    </animated.main>
  );
};

export default MoviesList;
