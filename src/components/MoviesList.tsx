import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import { MovieData } from '../interfaces/interface';
import { useSelector } from 'react-redux';
import { StateMovieSection } from '../interfaces/interface';
import SingleMovie from './SingleMovie';
import isEqual from 'lodash/isEqual';

const MoviesList = () => {
  const [movieData, setMovieData] = useState<MovieData[]>([]);
  const selectedButton = useSelector((state: StateMovieSection) => state.moviesSort.selectedButton);
  const moviesSearch: MovieData[] = useSelector((state: StateMovieSection) => state.moviesSearch.moviesSearchList);
  const [currentData, setCurrentData] = useState<MovieData[]>([]);
  const [sourceFlag, setSourceFlag] = useState<'movieData' | 'moviesSearch' | null>(null);
  const [prevMovieData, setPrevMovieData] = useState<MovieData[]>([]);
  const [prevMoviesSearch, setPrevMoviesSearch] = useState<MovieData[]>([]);

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
        } catch (error) {
          console.error('Błąd pobierania danych:', error);
        }
      };

      console.log('Effect triggered for selectedButton:', selectedButton);
      fetchData();
    }
  }, [selectedButton]);

  useEffect(() => {
    const isMovieDataChanged = !isEqual(prevMovieData, movieData);
    const isMoviesSearchChanged = !isEqual(prevMoviesSearch, moviesSearch);

    if (isMovieDataChanged) {
      setCurrentData(movieData);
      setSourceFlag('movieData');
    } else if (isMoviesSearchChanged) {
      setCurrentData(moviesSearch);
      setSourceFlag('moviesSearch');
    }
  }, [movieData, moviesSearch, prevMovieData, prevMoviesSearch, sourceFlag]);

  useEffect(() => {
    if (!isEqual(prevMovieData, movieData)) {
      setPrevMovieData(movieData);
    }
  }, [movieData, prevMovieData]);

  useEffect(() => {
    if (!isEqual(prevMoviesSearch, moviesSearch)) {
      setPrevMoviesSearch(moviesSearch);
    }
  }, [moviesSearch, prevMoviesSearch]);

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
