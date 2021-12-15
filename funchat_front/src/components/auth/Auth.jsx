import React, {useEffect, useState} from 'react'
import { auth } from '../../Firebase'

export const AuthContext = React.createContext()

function AuthProvider({ children }) {

    const [currentUser,setCurrentUser] = useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setCurrentUser(user)
            setLoading(false)
        })
    },[])


    if(loading){
        return <p>Loading...</p>
    }

    return (
        <AuthContext.Provider value={{currentUser}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider
