import React from 'react'

const FilmList = () => {
  return (
    <main className='mainFilmListContainer'>
        <span className='flexColumnCenter'>
            <div>Choose your list</div>
            <div>or find something new!</div>
        </span>
        <div className='spinnerLoader'>
            <div className='spin one'></div>
            <div className='spin two'></div>
            <div className='spin three'></div>
        </div>
        
    </main>
  )
}

export default FilmList