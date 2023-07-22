import React from "react";
import Message from './Message'
class Emp extends React.Component{
           e_name="Rahul"
           e_id=101
           e_sal=45000
    render() {
        return (
            <div>
                <h3>Emp Component</h3>
                <h3>Name:{this.e_name}</h3>
                <h3>ID:{this.e_id}</h3>
                <h3>Sal:{this.e_sal}</h3>

                <hr />
                <Message/>

            </div>
        )
    }
}
export default Emp


// In class we use the in-built React.component because in class we have to create methods,
// in methods we have to create objects but it react objects are not suported thats why we use 
// render method to ovveride the inbuilt component. 