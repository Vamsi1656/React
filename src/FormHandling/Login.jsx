import React, { Component } from 'react'

class Login extends Component {
    state={
        name:"",
        email:""
    }
    UpdateHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    
    getSubmitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
  render() {
    return (
    <div>
       <h2>Login Page</h2> 
       <pre>{JSON.stringify(this.state)}</pre>
      <form onSubmit={this.getSubmitHandler}>
        <label>Name:</label>
        <input type="text" name="name" onChange={this.UpdateHandler} /><br />
        <label  >Email:</label>
        <input type="text" name="email" onChange={this.UpdateHandler} /><br /><br />
        <input type="submit" />
      </form>

    </div>
    )
  }
}

export default Login