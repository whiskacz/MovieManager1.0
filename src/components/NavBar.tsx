import { useState, useEffect, useCallback } from 'react'
import { TbLogout } from 'react-icons/tb';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateMoviesSearchList } from '../store/moviesSearchActions';
import { StateMovieSection } from '../interfaces/interface';
import axios from 'axios';

const NavBar: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const[searchValue, setSearchValue] = useState<number|string>('')
  const[searchPush, setSearchPush] = useState<boolean>(false)
  const loggedUser = useSelector((state: StateMovieSection) => state.loggedUser.loggedUser)

  const props = useSpring({
      opacity: 1,
      transform: 'translateX(0)',
      from: { opacity: 0, transform: 'translateX(-100%)' },
      delay: 500, 
    });
  
  const handleLogout = () => {
    navigate("/")
  }
    
  const fetchData = useCallback(async () => {
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzk2MDU2MjVhMTgzNzc5YzRmNjYxNGRiZWIzYTg4YyIsInN1YiI6IjY1NDI0NmMzMTM2NTQ1MDBhZTQ2OTY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kcDSwgHd1n2A6uKck6jK8U8Hu4PtORmyr6HcvjPoxEQ'
      }
    };

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`, options);
      dispatch(updateMoviesSearchList(response.data.results));
    } catch (error) {
      console.error('Błąd pobierania danych:', error);
    }
  }, [dispatch,searchValue]);

    const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value)
    }
    
    const handleEnterPress = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        setSearchPush(true)
      }
    }, []);
    
    useEffect(() => {
      if(searchPush){
      fetchData();
      setSearchPush(false)
      setSearchValue('')
      }
    }, [fetchData,searchPush,handleEnterPress]);
    console.log(`loggedUser: ${loggedUser}`)
  return (
    <>
    <animated.main className='mainNavbar' style={props}>
        <span>Movie Manager 1.0</span>
        <div className='filmInputSearchBar moduls'>
          <input 
          type="text"
          value={searchValue}
          onChange={handleInputSearch}
          onKeyDown={handleEnterPress}
          />
          <label>Enter film name</label>  
        </div>
        <button onClick={()=> setSearchPush(true)} >Search</button>
        <div className='logoutContainer'>
            <div>
                Hello, {loggedUser}
            </div>
            <TbLogout style={{width:'1.5rem', height:'1.5rem', cursor:'pointer'}} onClick={handleLogout} />
        </div>
    </animated.main>
    </>
  )
}
export default NavBar