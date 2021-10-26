import React from 'react'
import './Chatroom.css'

// components

function Chatroom(props) {
    return (
        <div className="chatroom">

            <img src= {props.img_url} className='chatroom-picture' />
            <p className='chatroomname'>{props.chatroomname}</p>

        </div>
    )
}

export default Chatroom
