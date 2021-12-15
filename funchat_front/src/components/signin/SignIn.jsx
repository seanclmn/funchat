import React, {useState, useContext} from 'react'
import { Navigate } from 'react-router'
import { auth } from '../../Firebase'
import { AuthContext } from '../auth/Auth'

import './Signin.css'

function SignIn() {

    const [passwordToggle,setPasswordToggle]=useState(true)
    const [Email,setNewEmail]=useState("")
    const [Password, setNewPassword]=useState("")

    function emailChangeHandler(e){
        setNewEmail(e.target.value)
    }
    function passwordChangeHandler(e){
        setNewPassword(e.target.value)
    }


    function passwordHandler(){
        setPasswordToggle(!passwordToggle)
    }

    function submitHandler(e){
        e.preventDefault()
        auth.signInWithEmailAndPassword(Email,Password).then(cred=>{
            console.log(cred)
        })
        console.log(Email)
    }

    const { currentUser } = useContext(AuthContext)

    if (currentUser) return <Navigate to='/'/>

    return (
        <div className="signin-card-container">
            <h2 id="title">Sign in</h2>
            <form 
                className="signin-form"
                >
                <input
                    name="email"
                    className="signin-input"
                    type="text"
                    placeholder="email"
                    autoComplete="off"
                    onChange={emailChangeHandler}
                />  

                <input
                    name="password"    
                    className="signin-input"
                    type={passwordToggle ? "password": "text"}
                    placeholder="password"
                    autoComplete="off"
                    onChange={passwordChangeHandler}
                />

                <div>
                    <input
                        type="checkbox"
                        className="password-toggle"
                        onClick={passwordHandler}
                        
                    />Show Password
                </div>
                <button
                    className="submit"
                    onClick={submitHandler}
                    >
                    Sign In
                </button>


            </form>


            <div className="signup-link-container">
                <p className="signup-link">
                    New User? Sign up
                </p>
            </div>
        </div>
    )
}

export default SignIn
 