import React from 'react'
import { useState } from 'react'
function Password() {
    const [show,setshow]=useState(false)
    const getPasswordHandler=()=>{

        setshow(!show)
    }
  return (
    <div>Password
        
        <input type={show?"text":"password"} />
        <button onClick={getPasswordHandler}>{show?"Hide":"Show"}</button>  
    </div>
    
  )
}

export default Password