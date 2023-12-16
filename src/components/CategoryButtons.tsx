
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { setButtonSelection } from '../store/moviesSortActions';
import tmdbLogo from '../images/tmdbLogo.svg';



const CategoryButtons = () => {
  
  
  const dispatch = useDispatch();

  const handleButtonClick = (buttonName: string) => {

    let selectedButton = '' 

    if (buttonName === 'now playing') {
      selectedButton = 'now_playing';
    } else if (buttonName === 'private') {
      selectedButton = 'private';  
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

 
  const props = useSpring({
      opacity: 1,
      transform: 'translateX(0)',
      from: { opacity: 0, transform: 'translateX(-100%)' },
      delay: 1000, 
    });

  const categoryButtons = [
      'private',
      'now playing',
      'popular',
      'top rated',
      'upcoming'
  ]
  return (
    <animated.div className='mainCategoryButtons' style={props}>
        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
            <img src={tmdbLogo} alt="TMDB Logo" title="TMDB" />
        </a>
        {categoryButtons.map((element,index) => {
        return (
        <button key={index} onClick={() => handleButtonClick(element)}>{element}</button>
        )})}
    </animated.div>
  )
}

export default CategoryButtons