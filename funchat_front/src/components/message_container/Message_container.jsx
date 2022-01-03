import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import './Message_container.css'

import Message from '../message/Message'
import MessageInput from '../message_input/MessageInput'
function Message_container() {
    return (
        <div className="message-container" >
<ScrollToBottom>
                
                    <div className="messages">
                            <Message/>
                            <Message/>       
                            <Message/>
                            <Message/>                   
                            <Message/>
                            <Message/>        
                            <Message/>
                            <Message/>   
                            <Message/>
                            <Message/>   
                            <Message/>
                            <Message/>   
                            <Message/>
                            <Message/>   
                            <Message/>
                            <Message/>                       
                    </div>
                
                <div className="message-input-container">
                    <input className="message-input" type="text" />
                    <button className="message-send">send</button>
                </div>
</ScrollToBottom>
        </div>
    )
        
}

export default Message_container
