import axios from "axios"
import React from "react"
class Product extends React.Component{
           state={
            user:[]
           }
           componentDidMount=(()=>{
                axios.get("https://dummyjson.com/users")
                .then((response)=>{
                    console.log(response.data)
                            this.setState({user:response.data.users})             
                })
                .catch((err)=>{console.log(err)})
           })
          
    render(){

        return(
            <div>
                <h3>Product Component</h3>
                <pre>{JSON.stringify(this.state.user)}</pre>
            
                <table className="table">
                    <thead className="bg-success text-white">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Home City</th>
                        <th>Company City</th>
                        <th>Image</th>

                    </thead>
                    <tbody>
                        {this.state.user.map((users)=>{

                            return(
                                <tr>
                                    <td>{users.id}</td>
                                    <td>{users.lastName}</td>
                                    <td>{users.gender}</td>
                                    <td>{users.age}</td>
                                    <td>{users.address.city}</td>
                                    <td>{users.company.address.city}</td>
                                    <td><img src={users.image} width={200} height={120} alt="" /></td>
                                    
                               </tr>
                            )
                        })}
                    </tbody>
                    </table>
            </div>
        )
    }
}
export default Product