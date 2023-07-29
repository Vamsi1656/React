import React from 'react'
import { useState } from 'react'
function Login() {
  const [event,setEvent]=useState(" ")
  const [show,setshow]=useState(false)
  const getPasswordHandler=()=>{

      setshow(!show)
  }
  let UpdateHandler=(event)=>{
   setEvent({[event.target.name]:event.target.value})
}

 let getSubmitHandler=(event)=>{
    event.preventDefault()
    console.log(event)
}   

return (
  <div>
     <form onSubmit={getSubmitHandler}>
        <label>Name:</label>
        <input type="text" name="name" onChange={UpdateHandler} /><br />
        <label>Email:</label>
        <input type="text" name="email" onChange={UpdateHandler} /><br /><br />
        <label>Passsword</label>
        <input type={show?"text":"password"} />
         <button onClick={getPasswordHandler}>{show?"Hide":"Show"}</button>  <br /><br />
        <input type="submit" />
      </form>
      
      
  </div>
  
)
 
}

export default Login