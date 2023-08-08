import React from 'react'
import {data} from './data.js'
const Filter = () => {
    let [search,setSearch]=React.useState("")
    // console.log(search)
    //  console.log(data)
  return (
    <div>
        <h3>Filter Component</h3>
        <div className="container">
            <div className="row">
                <div className="col-6">
            <input onChange={(event)=>setSearch(event.target.value)} type="search" placeholder="Search here..." aria-describedby="button-addon8" className="form-control"/><br></br> 
                    <table className='table'>
                        <thead className='bg-primary'>
                            <tr>
                            <th>ID</th>
                            <th>First_Name</th>
                            <th>Last_Name</th>
                            <th>Email</th> 
                            <th>Gender</th> 
                            <th>Mobile Number</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {data.filter((item)=>{
                                return search.toLocaleLowerCase() ==='' 
                                ? item : item.first_name.toLocaleLowerCase().includes(search)
                            }).map((item)=>(
                                    <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.Phone}</td>
                                
                                   </tr>
                            ))}
                           
                        </tbody>
                                                 
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter