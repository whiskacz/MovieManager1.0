import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { setButtonSelection } from '../store/moviesSortActions';
import tmdbLogo from '../images/tmdbLogo.svg';
import { StateMovieSection } from '../interfaces/interface';
import axios from 'axios';


const CategoryButtons = () => {
  
  const loggedUser = useSelector((state: StateMovieSection) => state.loggedUser.loggedUser);
  const [privateMoviesId, setPrivateMoviesId] = useState<number[]>([]);
  const [privateMoviesData, setPrivateMoviesData] = useState<any[]>([]);
  const dispatch = useDispatch();

  const handleButtonClick = (buttonName: string) => {

    let selectedButton = '' 

    if (buttonName === 'now playing') {
      selectedButton = 'now_playing';
    } else if (buttonName === 'top rated') {
      selectedButton = 'top_rated';  
    } else if (buttonName === 'popular') {
      selectedButton = 'popular';
    } else if (buttonName === 'upcoming') {
      selectedButton = 'upcoming';  
    } else {
      selectedButton = buttonName;
    }


    dispatch(setButtonSelection(selectedButton));
    console.log('Button clicked!', selectedButton); 
  };

  const handlePrivateMoviesList = async () => {
    try {
      const user = loggedUser;
      const response = await axios.post('http://localhost:5000/moviesFetch', {
        user // Oznacz akcję jako pobieranie filmów
      });
  
      if (response.data && response.data.movies) {
        setPrivateMoviesId(response.data.movies); // Ustaw listę filmów w stanie komponentu
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
    console.log(privateMoviesId)
  };

  const fetchMovieData = async (movieIds: number[]) => {
    const apiKey = 'YOUR_TMDB_API_KEY'; // Tutaj wprowadź swój klucz TMDB API
  
    try {
      const moviesData = [];
      for (const id of movieIds) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: apiKey,
            language: 'en-US' // Tutaj możesz ustawić preferowany język
          },
        });
        moviesData.push(response.data); // Dodaj szczegółowe dane filmu do tablicy moviesData
      }
      setPrivateMoviesData(moviesData); // Ustaw szczegółowe dane filmów w stanie komponentu
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
    console.log(privateMoviesData)
  };

  const props = useSpring({
      opacity: 1,
      transform: 'translateX(0)',
      from: { opacity: 0, transform: 'translateX(-100%)' },
      delay: 1000, 
    });

  const categoryButtons = [
      'now playing',
      'popular',
      'top rated',
      'upcoming'
  ]

  useEffect(() => {
    // Tutaj sprawdzamy, czy privateMoviesId nie jest puste i wywołujemy fetchMovieData
    if (privateMoviesId.length > 0) {
      fetchMovieData(privateMoviesId);
    }
  }, [privateMoviesId, fetchMovieData]);

  return (
    <animated.div className='mainCategoryButtons' style={props}>
        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
            <img src={tmdbLogo} alt="TMDB Logo" title="TMDB" />
        </a>
        <button onClick={handlePrivateMoviesList}>Private</button>
        {categoryButtons.map((element,index) => {
        return (
        <button key={index} onClick={() => handleButtonClick(element)}>{element}</button>
        )})}
    </animated.div>
  )
}

export default CategoryButtons