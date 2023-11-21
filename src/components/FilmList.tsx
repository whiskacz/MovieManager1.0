
import { useSpring, animated } from 'react-spring';


const FilmList = () => {
    
    const props = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-100%)' },
        delay: 1500, 
      });

  return (
    <animated.main className='mainFilmListContainer' style={props}>
        <span className='flexColumnCenter'>
            <div>Choose your list</div>
            <div>or find something new!</div>
        </span>
        
        
    </animated.main>
  )
}

export default FilmList