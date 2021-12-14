import React from 'react'
import './Chatroom_container.css'

import Chatroom from '../chatroom/Chatroom'
import MyProfile from '../my_profile/MyProfile'
import ChatroomSearch from '../chatroom_search/ChatroomSearch'
import SignOut from '../signout/SignOut'

function Chatroom_container() {
    return (
        <div className='chatroom-container'>
            <MyProfile profilename = {"kumamon"} img_url={process.env.PUBLIC_URL+'/kumamon.jpeg'} />
            <SignOut/>
            <ChatroomSearch/>

            <Chatroom chatroomname={"Qoo"} img_url={process.env.PUBLIC_URL+'/qoo.jpeg'}/>
            <Chatroom chatroomname={"Qoo"} img_url={process.env.PUBLIC_URL+'/qoo.jpeg'}/>

            <Chatroom chatroomname={"Qoo"} img_url={process.env.PUBLIC_URL+'/qoo.jpeg'}/>

            <Chatroom chatroomname={"Qoo"} img_url={process.env.PUBLIC_URL+'/qoo.jpeg'}/>


        </div>
    )
}

export default Chatroom_container
