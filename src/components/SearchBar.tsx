import React from 'react';
import tmdbLogo from '../images/tmdbLogo.svg';


const SearchBar: React.FC = () => {
  return (
      <main className='searchBarContainer'>
        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
        <img src={tmdbLogo} alt="TMDB Logo" title="TMDB" />
        </a>
        <div className='filmInputSearchBar moduls'>
          <input type="text" />
          <label>Enter film name</label>  
        </div>
      </main>
  )
}

export default SearchBar
