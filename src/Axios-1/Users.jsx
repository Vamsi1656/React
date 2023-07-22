import React, { Component } from 'react'
import axios from 'axios'
export class Users extends Component {
    state={

        user:[]
    }
    DataHandler=()=>{

       let response= axios.get("https://jsonplaceholder.typicode.com/albums")
       .then((response)=>{
             console.log(response)
             this.setState({user:response.data})

       })
       .catch((err)=>{console.log(err)})
    }
  render() {
    return (
      <div>
       <h3>Users Component</h3> 
       <pre>{JSON.stringify(this.state)}</pre>
       <button onClick={this.DataHandler}>Click</button>
       <table className='table'>
        <thead>
            <th>ID</th>
            <th>UserID</th>
            <th>Title</th>
             </thead>
             <tbody>
                {
                 this.state.user.map((value)=>{

                    return(
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.userId}</td>
                            <td>{value.title}</td>

                        </tr>
                    )
                })}
             </tbody>
       </table>
        </div>
    )
  }
}

export default Users