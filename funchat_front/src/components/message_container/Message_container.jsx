import React from 'react'
import './Message_container.css'

import Message from '../message/Message'
import MessageInput from '../message_input/MessageInput'
function Message_container() {
    return (
        <div className="message-container" >
            <div className="messages">
                <Message/>
                <Message/>            
            </div>
            {/* <MessageInput/> */}
            <div className="message-input-container">
                <input className="message-input" type="text" />
                <button className="message-send">send</button>
            </div>
        </div>
    )
        
}

export default Message_container
