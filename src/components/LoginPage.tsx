import { useRef, useState, useEffect } from "react";
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";
import { MdEmail, MdLockOutline, MdAccountCircle } from "react-icons/md";

export const LoginPage = () => {
    

    const [logInData,setLogInData] = useState<{
        user: string,
        password: string,
        userFocus: boolean,
        passwordFocus: boolean
    }>({
        user: '',
        password: '',
        userFocus: false,
        passwordFocus: false
    })
    const [signUpData,setSignUpData] = useState<{
        user: string,
        password: string,
        email: string,
        userFocus: boolean,
        passwordFocus: boolean
    }>({
        user: '',
        password: '',
        email: '',
        userFocus: false,
        passwordFocus: false
    })
    
    const [position, setPosition] = useState<string>('sign');
    const [rotation, setRotation] = useState<number>(0);
    
    const USER_REGEX = /^[A-z][A-z0-9-_]{5,15}$/;
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{10,20}$/;
    
    let iconPosition: number 
    position === "sign" ?  iconPosition = -40 : iconPosition = 180
    const handleTogglePosition = () => {
        const newPosition: string = position === 'sign' ? 'register' : 'sign';
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
                    transform: `translateX(${iconPosition}%) rotate(${rotation}deg)`,
                    transition: 'transform 0.5s ease',
                    
                }}/>
            </div>
        </div>
        <div className='loginPageBox'>
            {position === 'sign' ? 
            <div className='relativeBox'>
                <span>Log In</span>
                <div className='inputContainer flexColumnCenter'>
                    <div className='inputBox'>
                        <MdEmail style={{width:'2rem', height:'2rem'}} />
                        <input 
                        type='text' 
                        placeholder='User'
                        value={logInData.user}
                        onChange={(e)=>setLogInData(prevState => ({...prevState, user: e.target.value}))}
                        onFocus={(event) => {setLogInData(prevState => ({...prevState, userFocus : true}))}}  
                        />
                    </div>
                    <div className='inputBox'>
                        <MdLockOutline style={{width:'2rem', height:'2rem'}} />
                    <input 
                    type='password' 
                    placeholder='Password'
                    value={logInData.password}
                    onChange={(e)=>setLogInData(prevState => ({...prevState, password: e.target.value}))} 
                    onFocus={(event) => {setLogInData(prevState => ({...prevState, userPassword : true}))}} 
                    />
                    </div>
                </div>
                <div className='buttonContainer flexColumnCenter'>
                    <button>
                        Login
                    </button>
                    {/* <span>
                        Forgot your password?
                    </span> */}
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
