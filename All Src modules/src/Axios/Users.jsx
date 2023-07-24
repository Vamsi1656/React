// Axios is a library that serves to create HTTP requests that are present externally. 
//It is evident from the fact that we may sometimes in React applications need to get data from the external source. 
//It is quite difficult to fetch such data so that they can be normally shown on the website.


import React, { Component } from 'react'
import axios from 'axios'
class Users extends Component {
    state={ 
        User:[]
    };
    getHandler=()=>{
            //invoking API
        const response= axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            this.setState({User:response.data})
        })
        .catch((err)=>{console.log(err)})   
    }
  render() {
    return (
      <div>
         <button onClick={this.getHandler}>Click</button>
         <pre>{JSON.stringify(this.state)}</pre>
         <table className='table'  >
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>city</th>
          </thead>
          <tbody>
            {
              this.state.User.map((value)=>{
                return (<tr>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.address.city}</td>
                </tr>);
              })
            }
          </tbody>
         </table>
      </div>
     
    )
  }
}

export default Users