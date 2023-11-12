import React from 'react'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'
import CategoryButtons from '../components/CategoryButtons'


const Manager: React.FC = () => {
  return (
    <main className='mainMangerContainer'>
      <NavBar />
      <CategoryButtons />
      <SearchBar />
    </main>
  )
}
export default Manager
