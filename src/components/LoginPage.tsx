import { useState } from 'react';
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";

export const LoginPage = () => {

    const [position, setPosition] = useState<number>(-50);
    const [rotation, setRotation] = useState<number>(0);

    const handleTogglePosition = () => {
        const newPosition: number = position === -50 ? 200 : -50;
        const newRotation: number = rotation === 0 ? 90 : 0;
    
        setPosition(newPosition);
        setRotation(newRotation);
      };

  return (

    <main className='loginPageWrapper'>
        <div className='choiceContainer'>
            <div className='choiceTitle'>
                <p>Log In</p>
                <p>Sign Up</p>
            </div>
            <div className='choiceNavbar' onClick={handleTogglePosition}>
                <div className='bar' />
                <BsFillArrowUpLeftCircleFill style={{
                    width:'2.5rem',
                    height:'2.5rem',
                    color:'var(--myColor1)',
                    position:'absolute',
                    top:'-50%',
                    transform: `translateX(${position}%) rotate(${rotation}deg)`,
                    transition: 'transform 0.5s ease',
                    
                }}/>
            </div>
        </div>

        <div className='loginPageBox'>
        </div>    
    </main>
  )
}
