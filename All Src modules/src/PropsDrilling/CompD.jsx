import React from "react";
class CompD extends React.Component{

        render(){
        
            return(
                <div>
                    <h3>CompD</h3>
                    <pre>{JSON.stringify(this.props.Name2)}</pre>
                    </div>
            )

        }

}
export default CompD