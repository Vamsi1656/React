import React from "react";

class Message extends React.Component{
             state={
                u_name:"Nani",
                u_id:30,
             }
             method=()=>{
                this.setState({u_name:"Virat"})
                this.setState({u_id:18})


             }
                
        
             
    render(){
        return(
            <div>
                <h2>Message Component</h2>
                <h3>Name:{this.state.u_name}</h3>
                <h3>Name:{this.state.u_id}</h3>
                <button onClick={this.method}>Click</button>
                



            </div>
        )
    }
    
}

export default Message