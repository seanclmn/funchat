import React from 'react'
import firebase, { auth } from '../../Firebase'

function GoogleSignIn() {

    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <button onClick={signInWithGoogle}>

        </button>
    )
}

export default GoogleSignIn
