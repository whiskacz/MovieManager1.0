import { useState } from 'react';
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";
import { MdEmail, MdLockOutline, MdAccountCircle } from "react-icons/md";

export const LoginPage = () => {

    const [position, setPosition] = useState<number>(-40);
    const [rotation, setRotation] = useState<number>(0);

    const handleTogglePosition = () => {
        const newPosition: number = position === -40 ? 180 : -40;
        const newRotation: number = rotation === 0 ? 90 : 0;
    
        setPosition(newPosition);
        setRotation(newRotation);
      };

  return (

    <main className='loginPageWrapper flexColumnCenter'>
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
            {position === -40 ? 
            <div className='relativeBox'>
                <span>Log In</span>
                <div className='inputContainer flexColumnCenter'>
                    <div className='inputBox'>
                        <MdEmail style={{width:'2rem', height:'2rem'}} />
                        <input type='text' placeholder='Email' />
                    </div>
                    <div className='inputBox'>
                        <MdLockOutline style={{width:'2rem', height:'2rem'}} />
                    <input type='password' placeholder='Password' />
                    </div>
                </div>
                <div className='buttonContainer flexColumnCenter'>
                    <button>
                        Login
                    </button>
                    <span>
                        Forgot your password?
                    </span>
                </div>

            </div>
            :
            <div className='relativeBox'>
                <span>Sign Up</span>
                <div className='inputContainer flexColumnCenter'>
                    <div className='inputBox'>
                        <MdAccountCircle style={{width:'2rem', height:'2rem'}} />
                        <input type='text' placeholder='Full Name' />
                    </div>
                    <div className='inputBox'>
                        <MdEmail style={{width:'2rem', height:'2rem'}} />
                        <input type='text' placeholder='Email' />
                    </div>
                    <div className='inputBox'>
                        <MdLockOutline style={{width:'2rem', height:'2rem'}} />
                        <input type='password' placeholder='Password' />
                    </div>
                </div>
                <button>
                    Register
                </button>
            </div>
            }
        </div>    
    </main>
  )
}
