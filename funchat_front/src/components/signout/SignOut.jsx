import React from 'react'
import { auth } from '../../Firebase'

function SignOut() {

    function signOutHandler(e){
        e.preventDefault()
        auth.signOut().then(res=>console.log("signed out"))

    }
    return (
        <button onClick={signOutHandler}> Sign Out</button>
    )
}

export default SignOut
