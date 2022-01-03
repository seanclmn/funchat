import React,{useState, useContext} from 'react'
import { AuthContext } from '../auth/Auth'
import {auth} from './../../Firebase'
import { render } from 'react-dom'
import { storage } from '../../Firebase'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import UpdateProfile from './update-profile/UpdateProfile'
import './MyProfile.css'

function MyProfile(props) {
  Modal.setAppElement('body');

    const customStyles = {
        content: {
            textAlign: 'center',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            width: '20%',
            height: '400px',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
      };


    const [profileSettings,setProfileSettings]=useState(true)

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    function profileSettingsHandler(){
        setProfileSettings(!profileSettings)
    }

    const stuff = useContext(AuthContext)
    console.log(stuff)
    return (
        <div className="my-profile">
            <img 
              onClick={openModal} 
              src={props.img_url} 
              id='profile-image'
              style={{cursor: 'pointer'}}
            />

            <p className='profile-name'>{auth.currentUser.displayName ? auth.currentUser.displayName: auth.currentUser.email}</p>

            <div>
                <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Change Profile</h2>

                    <UpdateProfile/>
                </Modal>                
            </div>

        </div>
    )
}  
    
export default MyProfile


