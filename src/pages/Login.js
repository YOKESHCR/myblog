import React from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login({setIsAuth}) {
  let navigate = useNavigate()  

  const signInwithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
        localStorage.setItem("isAuth", true)
        setIsAuth(true)
        navigate("/")
    })

  }  
  return (
    <div className='loginPage'>
        <p>
            Sign In with Google to continue
        </p>
        <button className='login-with-google-button' onclick={signInwithGoogle}>
            Sign In with Google
        </button>
    </div>
  )
}

export default Login
