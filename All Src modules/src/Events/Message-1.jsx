import React from "react"
class Message extends React.Component{
            state={
                u_name:"Rahul Gandhi"
            }
            ChangeHandler=(value)=>{
                this.setState({u_name:value})
            }


    render(){
        return(
            <div>
                <h2>Message Component</h2>
                <pre>{JSON.stringify(this.state)}</pre>
                <h3>Name:{this.state.u_name}</h3>
                <button onClick={this.ChangeHandler.bind(this,"Modi")} onDoubleClick={this.ChangeHandler.bind(this,"Jagan")}>Hii</button>
                <button onClick={this.ChangeHandler.bind(this,"Amitsha")} onDoubleClick={this.ChangeHandler.bind(this,"CBN")}>Hello</button>
                <button onClick={this.ChangeHandler.bind(this,"Priyanka Gandhi")} onDoubleClick={this.ChangeHandler.bind(this,"KCR")}>Namaste</button>
                <button onClick={this.ChangeHandler.bind(this,"Sonia Gandhi")} onDoubleClick={this.ChangeHandler.bind(this,"KTR")}>Vannakam</button>

            </div>
        )
    }
}
export default Message