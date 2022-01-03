import React, {useEffect, useState} from 'react'
import Firebase from '../../Firebase'
import './Chatroom_container.css'

import Chatroom from '../chatroom/Chatroom'
import MyProfile from '../my_profile/MyProfile'
import ChatroomSearch from '../chatroom_search/ChatroomSearch'
import SignOut from '../signout/SignOut'

function Chatroom_container() {


    const [loading,setLoading]=useState(true)
    const [profileSettings,setProfileSettings]=useState(true)
    function profileSettingsHandler(){
        setProfileSettings(!profileSettings)
    }
    function getUsers(){
        const snapshot = Firebase.firestore().collection('chats').get()
    
        snapshot.docs.map(doc=>console.log(doc.data))
    }
    useEffect(()=>{
        getUsers()
    },[])
    
    if(loading) return null
    return (
        <div className='chatroom-container'>
            <MyProfile profilename = {"kumamon"} img_url={process.env.PUBLIC_URL+'/kumamon.jpeg'} />
            <SignOut/>

            <nav className='chatroom-nav'>
                <a className='chatroom-divider'>Chats</a>
                <a className='chatroom-divider'>Explore</a>
            </nav>
            <ChatroomSearch/>

            <Chatroom 
                chatroomname={"Qoo"} 
                img_url={process.env.PUBLIC_URL+'/qoo.jpeg'}
            />
            <Chatroom 
                chatroomname={"Qoo"} 
                img_url={process.env.PUBLIC_URL+'/qoo.jpeg'}
            />


        </div>
    )
}

export default Chatroom_container
