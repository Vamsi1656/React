import React, { Component } from 'react'

class Button extends Component {
    state={
        data:""
    }
    buttonHandler=(event)=>{
        this.setState({data:event.target.value.disabled=true})
    }
  render() {
    return (
      <div>
        <h2>Button Component</h2>
        <hr />
        <label>Name::</label>
        <input type="text" /><br /><br />
        <label>Mobile Number</label>
        <input type="text" /><br /><br />
        <input type="checkbox" />
        <a href='./'>Terms&Conditions</a><br /><br />
        <button disable={this.state.data} onChange={this.buttonHandler}>Submit</button>
     </div>
    )
  }
}

export default Button