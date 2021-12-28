import React, {useEffect, useState} from 'react'
import { auth } from '../../Firebase'
import './Auth.css'

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
        return(
            <div className='loading-div'>
                <p>Loading...</p>
            </div>
            
            )
    }

    return (
        <AuthContext.Provider value={{currentUser}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider
