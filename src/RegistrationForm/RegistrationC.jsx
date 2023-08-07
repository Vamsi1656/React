import React, { Component } from 'react'

class RegistrationC extends Component {
    state={
        name:"",
      
        disabled:true
    }
   
    changeHandler=(event)=>{
     
        console.log(event.target.value)
            if(event.target.value.length > 6){
        this.setState({disabled:false})

            }

        }
       
       
    
        render() {
            return <>
            <input type="text" name="name" onChange={this.changeHandler}  placeholder='Name'/>
                            
            <button disabled={this.state.disabled}>Register</button></>
        }
        }

export default RegistrationC