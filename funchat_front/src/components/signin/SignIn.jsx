import React, {useState, useContext} from 'react'
import { Navigate } from 'react-router'
import { auth } from '../../Firebase'
import { AuthContext } from '../auth/Auth'

function SignIn() {

    const [Email,setNewEmail]=useState("")
    const [Password, setNewPassword]=useState("")

    function emailChangeHandler(e){
        setNewEmail(e.target.value)
    }
    function passwordChangeHandler(e){
        setNewPassword(e.target.value)
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
        <div>
            <h2>Sign in</h2>

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
                    type="text"
                    placeholder="password"
                    autoComplete="off"
                    onChange={passwordChangeHandler}
                />
                <button
                    onClick={submitHandler}
                    >
                    submit
                </button>
            </form>

        </div>
    )
}

export default SignIn
 