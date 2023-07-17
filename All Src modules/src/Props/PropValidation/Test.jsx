import React from "react";
import PropTypes  from "prop-types";
import App from "./App";
class Test extends React.Component{
          

    render(props){
            <App c = {this.props.Details}/>
        return(
            <div>
                <h2>Test Component</h2>
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>Details:{this.props.Details}</h2>
                <h2>ID:{this.props.id}</h2>
                <h2>Valid:{this.props.valid}</h2>
                <h2>Name:{this.props.Name}</h2>
            </div>
        )
    }
}
Test.propTypes={
      Details:PropTypes.array 
    
}
// Test.propTypes={
//     Valid:PropTypes.string

// }
Test.propTypes={
    Name:PropTypes.string
}

export default Test