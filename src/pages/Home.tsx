import React from 'react';
import '../css/main.css'
import { GiFilmStrip } from "react-icons/gi";

export const Home = () => {

  return (
    <>
      <div className='backgroundWrapper'>
        <li />
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
      </div>
      
    </>
  )
}

export default Home
