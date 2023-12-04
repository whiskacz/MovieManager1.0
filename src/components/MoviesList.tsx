import { useEffect, useState } from 'react';
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
      console.log('Effect triggered for selectedButton:', selectedButton);
      const fetchData = async () => {
        if(selectedButton) {
        try {
          const apiKey = '179605625a183779c4f6614dbeb3a88c';
          const language = 'pl';
          const apiUrl = `https://api.themoviedb.org/3/movie/${selectedButton}?language=pl&page=1`; // 

          const response = await axios.get(apiUrl, {
            params: {
              api_key: apiKey,
              language: language,
              
            },
          });
          const data = response.data.results
          setMovieData([data])  
          console.log('Movie data updated:', data);      
        } catch (error) {
          console.error('Błąd pobierania danych:', error);
        }
      };
    }
    console.log(selectedButton)
    fetchData();
    console.log(movieData)
      }, [selectedButton,movieData]);
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