import React, { Component } from 'react'

class Message extends Component {
             state={
                u_name:"Virat",
                u_id:101,
                u_sal:45000
            }
            HikeSalHandler=(value)=>{

                this.setState({u_sal:45000+value})
            }

  render() {
    return (
      <div>
        <h2>Message</h2>
         <pre>{JSON.stringify(this.state)}</pre>
         <h2>Name:{this.state.u_name}</h2>
         <h2>Name:{this.state.u_id}</h2>
         <h2>Name:{this.state.u_sal}</h2>
        <button onClick={this.HikeSalHandler.bind(this,50000)}>Hike 50K</button>
        <button onClick={this.HikeSalHandler.bind(this,60000)}>Hike 60K</button>
        <button onClick={this.HikeSalHandler.bind(this,70000)}>Hike 70K</button>
        <button onClick={this.HikeSalHandler.bind(this,80000)}>Hike 80K</button>
        
        </div>
    )
  }
}

export default Message