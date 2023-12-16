import { useSpring, animated } from 'react-spring';
import LoginPage from '../components/LoginPage';
import LoginPageBackground from "../components/LoginPageBackground";
import '../styles/main.css';

export const Home = () => {

  const homeSpanAnimation = useSpring({
    opacity: 1,
      from: { opacity: 0 },
      delay: 700, 
  });
  const loginPageAnimation = useSpring({
    opacity: 1,
      from: { opacity: 0 },
      delay: 2500,
  });

  return (
    <>
      <animated.div style={homeSpanAnimation}>
        <span className='homeSpan'>Movie Manager 1.0</span>  
      </animated.div>
      <div className='backgroundWrapper'>
        <LoginPageBackground /> 
      </div>
      <animated.div style={loginPageAnimation}>
        <LoginPage />
      </animated.div>
    </>
  )
}

export default Home;
