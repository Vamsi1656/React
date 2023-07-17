import React from "react"
import Test from './Test'
class App extends React.Component{
           u_name="Nani"
           u_id=30
           u_avail=true
           u_details=["Hero","30movies"]
    render(){
        return(
                <div>
                    <h2>App Component</h2>
                    <hr />
                    <Test props="GM" Details={this.u_details} id={this.u_id} valid={this.u_avail} Name={this.u_name}/>                  
                </div>

        )
    }

}


export default App