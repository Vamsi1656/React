import React from "react";
import Product from "./Product";
class App extends React.Component{


    render(){

        return(
            <div>
                <h3>App Component</h3>
                <hr />

                <Product/>
            </div>
        )
    }

}
export default App