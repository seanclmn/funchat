import React, {useState} from 'react'
import { auth } from '../../Firebase'
import { Link } from 'react-router-dom'
import Firebase from '../../Firebase'
// import { collection } from "firebase/firestore"

import './Signup.css'

const db = Firebase.firestore()
// const users = collection(db, "users")

function Signup() {
    const [passwordToggle,setPasswordToggle]=useState(true)
    const [newEmail,setNewEmail]=useState("")
    const [newPassword, setNewPassword]=useState("")

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
        auth.createUserWithEmailAndPassword(newEmail,newPassword).then(cred=>{
            return db.collection('users').doc(cred.user.uid)
        })
        console.log(newEmail)
    }

    
    return (
        <div className="signup-card-container">
            <h2 id="title">Sign up</h2>

            <form 
                className="signup-form"
                >
                <input
                    name="email"
                    className="signup-input"
                    type="text"
                    placeholder="email"
                    autoComplete="off"
                    onChange={emailChangeHandler}
                />  

                <input
                    name="password"    
                    className="signup-input"
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
                    Sign Up
                </button>
            </form>
            <div className="signup-link-container">
                <Link to='/signin' style={ {textDecoration: 'none'}}>
                    <p className="signin-link">
                        Already have an account? Sign in
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Signup
