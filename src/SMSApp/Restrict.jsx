import React, { Component } from 'react'

export class Restrict extends Component {
    state={
        charcount:100,
        maxlen:100
    }
    countHandler=(event)=>{
        var lencount=event.target.value.length
        var max_Len=this.state.maxlen
        var result= max_Len-lencount
        this.setState({
            charcount:result
        })
        
    }
  render() {
    return (
      <div>
        <h1>SMS Application</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <textarea  rows="10" maxLength={100} onChange={this.countHandler}></textarea>
        <hr />
        <h3>Remaining characters:{this.state.charcount}</h3>
      </div>
    )
  }
}

export default Restrict