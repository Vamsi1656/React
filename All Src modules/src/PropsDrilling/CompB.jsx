import React from "react"
import CompC from "./CompC"
class CompB extends  React.Component{


    render(){

        return(
            <div>
                <h3>CompB</h3>
                <pre>{JSON.stringify(this.props)}</pre>
                <hr />
                <CompC Name1={this.props}/>
            </div>
        )
    }
}
export default CompB