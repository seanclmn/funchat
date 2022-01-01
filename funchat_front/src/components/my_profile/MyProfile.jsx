import React,{useState, useContext} from 'react'
import { AuthContext } from '../auth/Auth'
import { render } from 'react-dom'
import { storage } from '../../Firebase'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import UpdateProfile from './update-profile/UpdateProfile'
import './MyProfile.css'

function MyProfile(props) {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
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
            <img onClick={profileSettingsHandler} src={props.img_url} alt="profile-image" id='profile-image'/>
            <p className='profile-name'>{props.profilename}</p>

            <div>
                <button onClick={openModal}>Open Modal</button>
                <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

                    <UpdateProfile/>
                </Modal>                
            </div>

        </div>
    )
}






  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('body');
  
// export function ProfileModal() {
//     let subtitle;
//     const [modalIsOpen, setIsOpen] = React.useState(false);
  
//     function openModal() {
//       setIsOpen(true);
//     }
  
//     function afterOpenModal() {
//       // references are now sync'd and can be accessed.
//       subtitle.style.color = '#f00';
//     }
  
//     function closeModal() {
//       setIsOpen(false);
//     }
  
//     return (
//       <div>
//         <button onClick={openModal}>Open Modal</button>
//         <Modal
//           isOpen={modalIsOpen}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

//             <UpdateProfile/>
//         </Modal>
//       </div>
//     );
//   }
    
export default MyProfile


