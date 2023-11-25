import React,{ useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import { MovieData } from '../interfaces/interface';
import { useSelector } from 'react-redux';
import { StateMovieSection } from '../interfaces/interface';

const FilmList = () => {
  
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
          const language = 'pl';
          const apiUrl = `https://api.themoviedb.org/3/movie/${selectedButton}?language=pl&page=1`; // Zastąp "endpoint" właściwym adresem URL końcowym API TMDb

          const response = await axios.get<MovieData>(apiUrl, {
            params: {
              api_key: apiKey,
              language: language,
              // Dodaj inne parametry zapytania, jeśli są wymagane
            },
          });

          const data = response.data;
          setMovieData([data])
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
    <animated.main className='mainFilmListContainer' style={props}>
        <span className='flexColumnCenter'>
            <div>Choose your list</div>
            <div>or find something new!</div>
            <p>Wybrany przycisk: {selectedButton}</p>
            {movieData.map((element) => {
              return (
              <div></div>
            )})}
        </span>
        
        
    </animated.main>
  )
}

export default FilmList