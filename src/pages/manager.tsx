import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux/es/exports';
import store from '../store/store';
import NavBar from '../components/NavBar'
import CategoryButtons from '../components/CategoryButtons'
import MoviesList from '../components/MoviesList'
import backgroundImage1 from '../images/img1.jpg'; // Importuj wszystkie obrazy z folderu images
import backgroundImage2 from '../images/img2.jpg';
import backgroundImage3 from '../images/img3.jpg';
import backgroundImage4 from '../images/img4.jpg';
import backgroundImage5 from '../images/img5.jpg';


const Manager: React.FC = () => {

  const [backgroundImages] = useState([backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5 ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 20000); // Przełączanie obrazów co 8 sekund

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      setCurrentImageIndex(randomIndex);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [backgroundImages.length]);

  useEffect(() => {
    const randomizeTransform = () => {
      const elements = document.getElementsByClassName('backgroundImage') as HTMLCollectionOf<HTMLElement>;;

      for (let i = 0; i < elements.length; i++) {
        const randomOriginX = Math.random() * 100;
        const randomOriginY = Math.random() * 100;
        const randomScale = 1 + Math.random();

        elements[i].style.transformOrigin = `${randomOriginX}% ${randomOriginY}%`;
        elements[i].style.animationDuration = `${10 + Math.random() * 20}s`;
        elements[i].style.transform = `scale(${randomScale})`;
      }
    };

    randomizeTransform();
  }, []);
  
  return (
    <>
      <Provider store={store}>
        <div className="backgroundComponent mainManagerContainer">
          {backgroundImages.map((image, index) => (
            <img
              key={index}
              className={`backgroundImage ${index === currentImageIndex ? 'visible' : ''}`}
              src={image}
              alt={`Background ${index}`}
            />
          ))}
          <NavBar />
          <CategoryButtons />
          <MoviesList />
        </div>
      </Provider>
    </>
  )
}
export default Manager
