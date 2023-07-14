import React from "react";
class Emp extends React.Component{

    render() {
        return (
            <div>
                <h3>Emp Component</h3>
            </div>
        )
    }
}
export default Emp


// In class we use the in-built React.component because in class we have to create methods,
// in methods we have to create objects but it react objects are not suported thats why we use 
// render method to ovveride the inbuilt component. 