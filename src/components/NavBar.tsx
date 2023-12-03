import { useState, useEffect } from 'react'
import { TbLogout } from 'react-icons/tb';
import { useSpring, animated } from 'react-spring';
import { useDispatch } from 'react-redux';
import { updateMoviesSearchList } from '../store/moviesSearchActions';
import axios from 'axios';

const NavBar: React.FC = () => {

  const dispatch = useDispatch();
  const[searchValue, setSearchValue] = useState<number|string>('')

  const props = useSpring({
      opacity: 1,
      transform: 'translateX(0)',
      from: { opacity: 0, transform: 'translateX(-100%)' },
      delay: 500, 
    });

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }
  
  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      
    }
  };

  useEffect(() => {
    
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzk2MDU2MjVhMTgzNzc5YzRmNjYxNGRiZWIzYTg4YyIsInN1YiI6IjY1NDI0NmMzMTM2NTQ1MDBhZTQ2OTY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kcDSwgHd1n2A6uKck6jK8U8Hu4PtORmyr6HcvjPoxEQ'
        }
      };

      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, options);
          dispatch(updateMoviesSearchList(response.data));
        } catch (error) {
          console.error('Błąd pobierania danych:', error);
        }
      };

      fetchData();
    
}, [searchValue, dispatch]);


  return (
    <>
    <animated.main className='mainNavbar' style={props}>
        <span>Film Manager 1.0</span>
        <div className='filmInputSearchBar moduls'>
          <input 
          type="text"
          value={searchValue}
          onChange={handleInputSearch}
          onKeyDown={handleEnterPress} 
          />
          <label>Enter film name</label>  
        </div>
        <button>Search</button>
        <div className='logoutContainer'>
            <div>
                Hello, /user/
            </div>
            <TbLogout style={{width:'1.5rem', height:'1.5rem', cursor:'pointer'}} />
        </div>
    </animated.main>
    </>
  )
}
export default NavBar