import React from 'react'
import { TbLogout } from 'react-icons/tb';

const NavBar: React.FC = () => {
  return (
    <>
    <main className='mainNavbar'>
        <span>Film Manager 1.0</span>
        <div className='logoutContainer'>
            <div>
                Hello, /user/
            </div>
            <TbLogout style={{width:'1.5rem', height:'1.5rem', cursor:'pointer'}} />
        </div>
    </main>
    </>
  )
}
export default NavBar