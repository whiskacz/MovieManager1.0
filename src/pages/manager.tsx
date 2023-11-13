import React from 'react'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'
import CategoryButtons from '../components/CategoryButtons'
import FilmList from '../components/FilmList'


const Manager: React.FC = () => {
  return (
    <main className='mainManagerContainer'>
      <NavBar />
      <CategoryButtons />
      <SearchBar />
      <FilmList />
    </main>
  )
}
export default Manager
