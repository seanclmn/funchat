import React from 'react'
import './MyProfile.css'

function MyProfile(props) {
    return (
        <div className="my-profile">
            <img src={props.img_url} alt="profile-image" id='profile-image'/>
            <p className='profile-name'>{props.profilename}</p>
        </div>
    )
}

export default MyProfile


