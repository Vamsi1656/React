import React from "react";
class Message extends React.Component{
            msg="Gm"
            wish="Hii"

    render(){

        return(
            <div>
                <h3>Message Component</h3>
                <h3>Message:{this.msg}</h3>
                <h3>Wish:{this.wish}</h3>
            </div>
        )
    }
}
export default Message 