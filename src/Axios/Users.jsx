import React, { Component } from 'react'
import axios from 'axios'
class Users extends Component {
    state={
        users:[]
    }
    getHandler=()=>{
            //invoking API
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            this.setState({users:response})
        })
        .catch((err)=>{console.log(err)})   
    }
  render() {
    return (
      <div>
         <button onClick={this.getHandler}>Click</button>
         <pre>{JSON.stringify(this.state    )}</pre>
      </div>
     
    )
  }
}

export default Users