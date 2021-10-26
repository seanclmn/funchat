import React from 'react'

import './Main.css'

// components
import Message_container from '../components/message_container/Message_container'
import Chatroom_container from '../components/chatroom_container/Chatroom_container'

//pages


function Main() {
    return (
        <div className="main">

            <div className="main-container" id="mobile-view">
                <Chatroom_container/>
                <Message_container/>
            </div>

            <div className="main-container" id="desktop-view">
                <Chatroom_container/>
                <Message_container/>
            </div>
            
        </div>
    )
}

export default Main