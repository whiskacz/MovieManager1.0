import { useState } from 'react';
import { GiFilmStrip } from "react-icons/gi";
import { LoginPage } from '../components/LoginPage';
import '../styles/main.css';


export const Home = () => {

  const [showLogin, setShowLogin] = useState<boolean>(false) 
  const handleShowLogin = () => {
    setTimeout(()=>{
      setShowLogin(true);
    }, 100)
  }


  return (
    <>  
      <div className='backgroundWrapper' onClick={handleShowLogin}>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random())}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (2))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (5))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (10))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
        <li style={{left: `${Math.floor(Math.random() * (90))}%`}}><GiFilmStrip style={{width: `${Math.floor(Math.random()* 15)+ 2}rem`, height: `${Math.floor(Math.random()* 15)+ 2}rem`, left: `${Math.floor(Math.random() * (100))}%`, animationDelay: `${Math.floor(Math.random() * (15))}s`, animationDuration: `${Math.floor(Math.random() * (200)+15)}s`, opacity: `${Math.random()*(0.4-0.05)+0.1}`}}/></li>
      </div>
      {showLogin ? 
      <LoginPage /> : 
      <div className='mainTitle'>
        <p>Welcome,</p>
        <p>click to start</p>
      </div>
      }
    </>
  )
}

export default Home
