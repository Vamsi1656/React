import React, { Component } from 'react'

class Login extends Component {
    state={
        name:"",
        email:""
    }
    getNameHandler=(event)=>{
        this.setState({name:event.target.value})
    }
    getEmailHandler=(event)=>{
        this.setState({email:event.target.value})
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
        <input type="text" onChange={this.getNameHandler} /><br />
        <label  >Email:</label>
        <input type="text" onChange={this.getEmailHandler}/><br /><br />
        <input type="submit" />
      </form>

    </div>
    )
  }
}

export default Login