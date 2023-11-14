import React from 'react'
import { TbLogout } from 'react-icons/tb';
import { useSpring, animated } from 'react-spring';

const NavBar: React.FC = () => {

    const props = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-100%)' },
        delay: 500, 
      });

  return (
    <>
    <animated.main className='mainNavbar' style={props}>
        <span>Film Manager 1.0</span>
        <div className='filmInputSearchBar moduls'>
          <input type="text" />
          <label>Enter film name</label>  
        </div>
        <div className='logoutContainer'>
            <div>
                Hello, /user/
            </div>
            <TbLogout style={{width:'1.5rem', height:'1.5rem', cursor:'pointer'}} />
        </div>
    </animated.main>
    </>
  )
}
export default NavBar