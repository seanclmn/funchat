import React, {useState} from 'react'


function ProfileModal() {

  const [displayName,setDisplayName]=useState('')

  function ChangeHandler(name){
    setDisplayName(name)
  }

  // submitHandler(){
  //   setDisplayName(event.target.value)
  // }

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
          ChangeHandler(event)
        
          }}
        />
    </form>
    
  );
}

export default ProfileModal
