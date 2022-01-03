import React, {useState} from 'react'

import { auth } from './../../../Firebase'

function ProfileModal() {
  const user = auth.currentUser;

  const [newDisplayName,setNewDisplayName]=useState('')

  function ChangeHandler(name){
    setNewDisplayName(name)
  }

  function submitHandler(event){
    event.preventDefault()
    user.updateProfile({
      displayName: newDisplayName
    })
    console.log(newDisplayName)
  }

  return (
    <form>
      <p>
        hullo
      </p>


      <input
        name="display-name"
        type="text"
        onChange={(event)=>{
          event.preventDefault()
          ChangeHandler(event.target.value)
        
          }}
        />
        <button onClick={(event)=>{
          submitHandler(event)
          
          }}>
          Update
        </button>
    </form>
    
  );
}

export default ProfileModal
