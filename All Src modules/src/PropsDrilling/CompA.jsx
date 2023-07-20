import React from "react"
import CompB from "./CompB"
class CompA extends  React.Component{
         u_name="Virat"

    render(){

        return(
            <div>
                <h3>CompA</h3>
                <pre>Name:{JSON.stringify(this.u_name)}</pre>
                <hr />
                <CompB Name={this.u_name}/>
            </div>
        )
    }
}
export default CompA