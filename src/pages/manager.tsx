import React from 'react'
import NavBar from '../components/NavBar'
import CategoryButtons from '../components/CategoryButtons'
import FilmList from '../components/FilmList'


const Manager: React.FC = () => {
  return (
    <main className='mainManagerContainer'>
      <NavBar />
      <CategoryButtons />
      <FilmList />
    </main>
  )
}
export default Manager
