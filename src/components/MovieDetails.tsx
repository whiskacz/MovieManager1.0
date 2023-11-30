import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieData } from '../interfaces/interface';
import axios from 'axios';

const MovieDetails = () => {
    
    const [movieId, setMovieId] = useState<number>()
    const [movieData, setMovieData] = useState<MovieData[]>([]); 
    
    const location = useLocation()

    useEffect(() => {
        const managerData = location.pathname.split('manager/')[1]; // Wyodrębnienie danych po "manager/"
        console.log(managerData); // Wyświetlenie danych w konsoli
    
        setMovieId(movieId)
      
        const fetchData = async () => {
         
          try {
            const apiKey = '179605625a183779c4f6614dbeb3a88c';
            const language = 'us';
            const apiUrl = `const url = 'https://api.themoviedb.org/3/find/${movieId}?external_source=';`;
  
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
        
      }
          console.log(movieData)
          fetchData();
        }, [location.pathname]);
    
  return (
    <>
    <div>MovieDetails</div>
    <div>{movieId}</div>
    </>
  )
}

export default MovieDetails