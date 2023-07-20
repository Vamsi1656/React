import React from "react"
class User extends React.Component{
         User=[{user_name:"Nani", user_id:101,user_sal:90000},
         {user_name:"Virat", user_id:102,user_sal:100000},
         {user_name:"Pallavi", user_id:103,user_sal:1500000},
         {user_name:"Vamsi", user_id:104,user_sal:9000},
         {user_name:"Siva", user_id:105,user_sal:10000},
         {user_name:"Jaggu", user_id:106,user_sal:10000}]
           
    
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