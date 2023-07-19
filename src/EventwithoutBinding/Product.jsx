import React from "react"
class Product extends React.Component{
          state={
            p_name:"Violin",
            price:10000,
            Qty:1
          }
          IncrHandeler=()=>{
            this.setState({Qty:this.state.Qty+1})
          }
          DecrHandeler=()=>{
            this.setState({Qty:this.state.Qty-1})
          }
        
          
   render(){

    return(
        <div>
            <h2>Product Component</h2>
            <pre>{JSON.stringify(this.state)}</pre>
            <h3>Name:{this.state.p_name}</h3>
            <h3>Name:{this.state.price*this.state.Qty}</h3>
            <h3>Name:{this.state.Qty}</h3>
            <button onClick={this.IncrHandeler}>Incr</button>
            <button onClick={this.DecrHandeler}>Decr</button>
        </div>
    )
   } 
}
export default Product