import React, { Component } from 'react'

class DigitalC extends Component {
    state={
        ct:new Date().toLocaleTimeString()
    }
    timer;
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({ct:new Date().toLocaleTimeString()})
        })
    }
  render() {
    return (
      <div>
        <h3>Digital clock using class Component</h3>
        <pre>{JSON.stringify(this.state)}</pre>
        <h2>Current Time:{this.state.ct}</h2>
    </div>
    )
  }
}

export default DigitalC