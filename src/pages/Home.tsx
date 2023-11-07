import React from 'react';
import '../css/main.css'
import { GiFilmStrip } from "react-icons/gi";

export const Home = () => {
  return (
    <>
      <div className='backgroundWrapper'>
        <li><GiFilmStrip style={{ 
          width: `${Math.floor(Math.random()* 5)+ 25}rem`
          }}/></li>
        <li><GiFilmStrip /></li>
        <li><GiFilmStrip /></li>
        <li><GiFilmStrip /></li>
        <li><GiFilmStrip /></li>
        <li><GiFilmStrip /></li>
        <li><GiFilmStrip /></li>
        <li><GiFilmStrip /></li>
        <li><GiFilmStrip /></li>
        <li><GiFilmStrip /></li>

      </div>
    </>
  )
}

export default Home
