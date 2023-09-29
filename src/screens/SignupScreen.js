import React, { useRef } from 'react'
import './SignupScreen.css'
import { auth } from '../firebase';


function SignupScreen() {
    const emailref= useRef(null);
    const passwordRef= useRef(null);

    const register= (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordRef.current.value
          )
            .then((authUser)=>{
                console.log(authUser);
            })
            .catch((error)=>{
                alert(error.message);
            })
            
        };

    const signIn= (e)=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(
            emailref.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>
            alert(error.message));
    };
    
  return (
    <div className='signupScreen'>
        <form>
        <h1>Sign Up</h1>
        <input ref={emailref} placeholder='Email' type='email'/>
        <input ref={passwordRef} placeholder='Password' type='password'/>
        <button type='submit' onClick={signIn}>
            Sign In</button>
        <h4>
            <span className='signupScreen__gray'>New to Netflix? </span>
            <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
        </h4>
        </form>
    </div>
  )
}

export default SignupScreen