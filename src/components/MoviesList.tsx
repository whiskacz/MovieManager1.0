import React,{ useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import { MovieData } from '../interfaces/interface';
import { useSelector } from 'react-redux';
import { StateMovieSection } from '../interfaces/interface';
import SingleMovie from './SingleMovie';

const MoviesList = () => {
  
  const [movieData, setMovieData] = useState<MovieData[]>([]);  
  const selectedButton = useSelector((state: StateMovieSection) => state.selectedMovieSection);
    
    const props = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-100%)' },
        delay: 1500, 
      });

    useEffect(() => {
      const fetchData = async () => {
        if(selectedButton) {
        try {
          const apiKey = '179605625a183779c4f6614dbeb3a88c';
          const language = 'us';
          const apiUrl = `https://api.themoviedb.org/3/movie/${selectedButton}?language=pl&page=1`; // Zastąp "endpoint" właściwym adresem URL końcowym API TMDb

          const response = await axios.get(apiUrl, {
            params: {
              api_key: apiKey,
              language: language,
              // Dodaj inne parametry zapytania, jeśli są wymagane
            },
          });

          const data = response.data.results
          setMovieData(data)
          // Tutaj możesz przetwarzać dane z odpowiedzi API
          
         //console.log(data);
        } catch (error) {
          console.error('Błąd pobierania danych:', error);
        }
      };
    }
        console.log(movieData)
        fetchData();
      }, [selectedButton, movieData]);


  return (
    <animated.main className='mainMoviesListContainer' style={props}>
        {movieData.length === 0 ?
        <span className='flexColumnCenter'>
            <div>Choose your list</div>
            <div>or find something new!</div>
            <p>Wybrany przycisk: {selectedButton}</p>        
        </span> :
        
                movieData.map((element) => (
                  <SingleMovie key={element.id} data={element} />
                ))
               
              
            }
        
    </animated.main>
  )
}

export default MoviesList