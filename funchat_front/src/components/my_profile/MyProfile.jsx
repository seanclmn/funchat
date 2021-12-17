import React,{useState, useContext} from 'react'
import { AuthContext } from '../auth/Auth'
import './MyProfile.css'

function MyProfile(props) {
    const [profileSettings,setProfileSettings]=useState(true)
    function profileSettingsHandler(){
        setProfileSettings(!profileSettings)
    }

    const stuff = useContext(AuthContext)
    console.log(stuff)
    return (
        <div className="my-profile">
            <img onClick={profileSettingsHandler} src={props.img_url} alt="profile-image" id='profile-image'/>
            <p className='profile-name'>{props.profilename}</p>
        </div>
    )
}

export default MyProfile


