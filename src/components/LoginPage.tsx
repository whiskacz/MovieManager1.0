import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserName } from "../store/loggedUserActions";
import { BsFillArrowUpLeftCircleFill, BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { MdEmail, MdLockOutline, MdAccountCircle } from "react-icons/md";
import axios from "axios";


export const LoginPage = () => {
    
    let iconPosition: number 
    const navigate = useNavigate()
    const dispatch = useDispatch();

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
        passwordFocus: boolean,
        emailFocus: boolean
    }>({
        user: '',
        password: '',
        email: '',
        userFocus: false,
        passwordFocus: false,
        emailFocus: false
    })

    const [validationLogIn, setValidationLogIn] = useState<{
        user: boolean,
        password: boolean 
    }>({
        user: false,
        password: false
    })

    const [validationSignUp, setValidationSignUp] = useState<{
        user: boolean,
        password: boolean,
        email: boolean 
    }>({
        user: false,
        password: false,
        email: false
    })

    const [position, setPosition] = useState<string>('sign');
    const [rotation, setRotation] = useState<number>(0);

    const USER_REGEX = useMemo(() => {
        return /^[A-z][A-z0-9-_]{4,15}$/
    },[]) 

    const PASSWORD_REGEX = useMemo(() => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{4,20}$/
    },[]) 

    const EMAIL_REGEX = useMemo(() => {
        return /^[A-Za-z\d]+@[A-Za-z\d]{2,}\.[A-Za-z\d]{2,}$/
    },[]) 
    
    
    position === "sign" ?  iconPosition = -40 : iconPosition = 180
    const handleTogglePosition = () => {
        const newPosition: string = position === 'sign' ? 'register' : 'sign';
        const newRotation: number = rotation === 0 ? 90 : 0; 
        setPosition(newPosition);
        setRotation(newRotation);
      };

    useEffect(() => {
        setValidationLogIn(prevState => ({...prevState, user: USER_REGEX.test(logInData.user)}))
    },[logInData.user, USER_REGEX])

    useEffect(() => {
        setValidationLogIn(prevState => ({...prevState, password: PASSWORD_REGEX.test(logInData.password)}))
    },[logInData.password, PASSWORD_REGEX])

    useEffect(() => {
        setValidationSignUp(prevState => ({...prevState, user: USER_REGEX.test(signUpData.user)}))
    },[signUpData.user, USER_REGEX])

    useEffect(() => {
        setValidationSignUp(prevState => ({...prevState, password: PASSWORD_REGEX.test(signUpData.password)}))
    },[signUpData.password, PASSWORD_REGEX])

    useEffect(() => {
        setValidationSignUp(prevState => ({...prevState, email: EMAIL_REGEX.test(signUpData.email)}))
    },[signUpData.email, EMAIL_REGEX])

    const signUpClick = () => {
        const newNote = {
            user: signUpData.user,
            password: signUpData.password,
            email: signUpData.email
        }
        axios.post("http://localhost:5000/create", newNote)
        .then((response) => {
            if (response.status === 201) {
                setSignUpData({
                    user: '',
                    password: '',
                    email: '',
                    userFocus: false,
                    passwordFocus: false,
                    emailFocus: false
                });
                const articlePopUp = document.querySelector('.articlePopUp') as HTMLElement | null;
                if (articlePopUp) {
                    articlePopUp.textContent = 'User created successfully';
                    articlePopUp.style.right = '2vw';
                    setTimeout(() => {
                        articlePopUp.style.right = '-102vw';
                        articlePopUp.textContent = '';
                    }, 5000);
                }
            }
        })
        .catch((error) => {
            const articlePopUp = document.querySelector('.articlePopUp') as HTMLElement | null;
            if (articlePopUp) {
                let errorMessage = '';
                switch (error.response.status) {
                    case 500:
                        errorMessage = 'Server error';
                        break;
                    default:
                        errorMessage = 'Unknown error';
                }
                articlePopUp.textContent = errorMessage;
                articlePopUp.style.right = '2vw';
                setTimeout(() => {
                    articlePopUp.style.right = '-102vw';
                    articlePopUp.textContent = '';
                }, 5000);
            }
            console.error('Sign Up failed', error);
        });               
    }

    const logInClick = () => {
        const newNote = {
            user: logInData.user,
            password: logInData.password
        }
        axios.post("http://localhost:5000/login", newNote)
        .then((response) => {
            if(response.status === 200) {
                dispatch(setUserName(logInData.user));
                navigate("/manager")
            }
        })
        .catch((error) => {
            const articlePopUp = document.querySelector('.articlePopUp')as HTMLElement | null;
            if(articlePopUp) {
                let errorMessage = '';
                switch (error.response.status) {
                    case 401:
                        errorMessage = 'Invalid password';
                        break;
                    case 404:
                        errorMessage = 'User not found';
                        break;
                    case 500:
                        errorMessage = 'Server error';
                        break;
                    default:
                        errorMessage = 'Unknown error';
                }
                articlePopUp.textContent = errorMessage;
                articlePopUp.style.right = '2vw';
                setTimeout(() => {
                    articlePopUp.style.right = '-102vw';
                    articlePopUp.textContent = ''; 
                }, 5000); 
            }
            console.error('Login failed', error);
        }) 
    }

  return (
    <main className="mainLoginPageContainer">
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
                            <div className="inputBoxPlaceHolder">
                                <MdAccountCircle style={{width:'2rem', height:'2rem'}} />
                                <input 
                                type='text' 
                                placeholder='User'
                                value={logInData.user}
                                onChange={(e)=>setLogInData(prevState => ({...prevState, user: e.target.value}))}
                                onFocus={(event) => {setLogInData(prevState => ({...prevState, userFocus : true}))}}  
                            />
                            </div>
                            <BsXCircleFill className={ logInData.userFocus && !validationLogIn.user ? "checkFalse" : "checkHidden"} />
                            <BsCheckCircleFill className={validationLogIn.user ? "checkTrue" : "checkHidden"} />
                            
                        </div>
                        {logInData.userFocus && !validationLogIn.user ? <span className="infoValidation">
                            5 to 15 characters. Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </span> : null}
                        <div className='inputBox'>
                            <div className="inputBoxPlaceHolder">
                                <MdLockOutline style={{width:'2rem', height:'2rem'}} />
                                <input 
                                type='password' 
                                placeholder='Password'
                                value={logInData.password}
                                onChange={(e)=>setLogInData(prevState => ({...prevState, password: e.target.value}))} 
                                onFocus={(event) => {setLogInData(prevState => ({...prevState, passwordFocus : true}))}} 
                                />
                            </div>
                            <BsXCircleFill className={ logInData.passwordFocus && !validationLogIn.password ? "checkFalse" : "checkHidden"} />
                            <BsCheckCircleFill className={validationLogIn.password ? "checkTrue" : "checkHidden"} />
                        </div>
                        {logInData.passwordFocus && !validationLogIn.password ? <span className="infoValidation">
                            5 to 20 characters.Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: !@#$% 
                        </span> : null }
                    </div>
                    <div className='buttonContainer flexColumnCenter'>
                        <button 
                        disabled={validationLogIn.user || validationLogIn.password ? false : true}
                        onClick={logInClick}
                        >
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
                            <div className="inputBoxPlaceHolder">
                                <MdAccountCircle style={{width:'2rem', height:'2rem'}} />
                                <input 
                                type='text' 
                                placeholder='Full Name'
                                value={signUpData.user}
                                onChange={(e)=>setSignUpData(prevState => ({...prevState, user:e.target.value}))}
                                onFocus={(event) => {setSignUpData(prevState => ({...prevState, userFocus : true}))}} 
                                />
                            </div>
                            <BsXCircleFill className={ signUpData.userFocus && !validationSignUp.user ? "checkFalse" : "checkHidden"} />
                            <BsCheckCircleFill className={validationSignUp.user ? "checkTrue" : "checkHidden"} />
                        </div>
                        {signUpData.userFocus && !validationSignUp.user ? <span className="infoValidation">
                            5 to 15 characters. Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </span> : null}
                        <div className='inputBox'>
                            <div className="inputBoxPlaceHolder">
                                <MdLockOutline style={{width:'2rem', height:'2rem'}} />
                                <input 
                                type='password' 
                                placeholder='Password'
                                value={signUpData.password}
                                onChange={(e)=>setSignUpData(prevState => ({...prevState, password:e.target.value}))}
                                onFocus={(event) => {setSignUpData(prevState => ({...prevState, passwordFocus : true}))}} 
                                />
                            </div>
                            <BsXCircleFill className={ signUpData.passwordFocus && !validationSignUp.password ? "checkFalse" : "checkHidden"} />
                            <BsCheckCircleFill className={validationSignUp.password ? "checkTrue" : "checkHidden"} />
                        </div>
                        {signUpData.passwordFocus && !validationSignUp.password ? <span className="infoValidation">
                            5 to 20 characters.Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: !@#$% 
                        </span> : null }
                        <div className='inputBox'>
                            <div className="inputBoxPlaceHolder">
                                <MdEmail style={{width:'2rem', height:'2rem'}} />
                                <input 
                                type='text' 
                                placeholder='Email'
                                value={signUpData.email}
                                onChange={(e)=>setSignUpData(prevState => ({...prevState, email:e.target.value}))}
                                onFocus={(event) => {setSignUpData(prevState => ({...prevState, emailFocus : true}))}} 
                                />
                            </div>
                            <BsXCircleFill className={ signUpData.emailFocus && !validationSignUp.email ? "checkFalse" : "checkHidden"} />
                            <BsCheckCircleFill className={validationSignUp.email ? "checkTrue" : "checkHidden"} />
                        </div>
                        {signUpData.emailFocus && !validationSignUp.email ? <span className="infoValidation">
                            Minimum 5 characters.Must include: @ 
                        </span> : null }
                    </div>
                    <button 
                    disabled={validationSignUp.user || validationSignUp.password || validationSignUp.email ? false : true}
                    onClick={signUpClick}
                    >
                        Register
                    </button>
                </div>
                }
            </div>    
        </main>
        <article className="articlePopUp">
            Access denied
        </article>
    </main>
  )
}

export default LoginPage
