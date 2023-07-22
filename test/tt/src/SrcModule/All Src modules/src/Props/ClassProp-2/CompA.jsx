import React from "react";
import CompB from "./ComB";
class CompA extends React.Component{
       u_name="Virat"
       u_id=18
       u_loc="Delhi"

    render(){
        return(
            <div>
                <h2>CompA</h2>
                <h3>u_name:{this.u_name}</h3>
                <h3>u_name:{this.u_id}</h3>
                <h3>u_name:{this.u_loc}</h3>
                <hr />
                <CompB prop="GM" Location={this.u_loc}/>

            </div>
        )
    }
}
export default CompA