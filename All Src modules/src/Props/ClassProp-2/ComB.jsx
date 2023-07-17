import React from "react"
class CompB extends React.Component{
     
    render(props){

        return(
            <div>
                <h1>Comp B</h1>
                <pre>{JSON.stringify(props)}</pre>
                <h3>Location:{this.props.Location}</h3>
            </div>
        )
    }
}
export default CompB