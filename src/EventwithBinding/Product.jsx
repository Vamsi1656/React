import React from "react";
class Product extends React.Component{
      state={

        p_name:"MRFBat",
        price:100000,
        Qty:1
      }
      UpdateHandler=(value)=>{
             this.setState({Qty:value})

      }

     render(){

        return(
            <div>
                <h2>Product Component</h2>
                <pre>{JSON.stringify(this.state)}</pre>
                <h3>Name:{this.state.p_name}</h3>
                <h3>Name:{this.state.price}</h3>
                <h3>Name:{this.state.Qty}</h3>
                <button onClick={this.UpdateHandler.bind(this,this.state.Qty+1)}>INCR</button>
                <button onClick={this.UpdateHandler.bind(this,this.state.Qty-1)}>DECR</button>

            </div>
        )
     }
}
export default Product