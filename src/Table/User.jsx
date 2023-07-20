import React from "react"
class User extends React.Component{
         User=  [{user_name:"Nani", user_id:101,user_sal:90000},
         {user_name:"Virat", user_id:102,user_sal:100000},
         {user_name:"Pallavi", user_id:103,user_sal:1500000}]
           
    
    render(){

        return(
            <div>
                <h3>User Component</h3>

                <table border={1}>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>

                    </thead>
                    <tbody>
                        {this.User.map((value)=>{
                            return(<tr>
                                <td>{value.user_id}</td>
                                <td>{value.user_name}</td>
                                <td>{value.user_sal}</td>
                            </tr>)

                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default User