import React from 'react'
import tmdbLogo from '../images/tmdbLogo.svg';
import { useSpring, animated } from 'react-spring';

const CategoryButtons = () => {

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
        <button key={index}>{element}</button>
        )})}
    </animated.div>
  )
}

export default CategoryButtons