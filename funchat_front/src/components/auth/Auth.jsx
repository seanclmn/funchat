import React, {useEffect, useState} from 'react'
import firebase from '../../Firebase'

export const AuthContext = React.createContext

function AuthProvider({ children }) {

    const [currentUser,setCurrentUser] = useState(null)

    useEffect(()=>{
        firebase.app.auth().onAuthStateChanged(setCurrentUser)
    },[])
    return (
        <AuthContext.AuthProvider value={{currentUser}}>
            {{ children }}
        </AuthContext.AuthProvider>
    )
}

export default AuthProvider
