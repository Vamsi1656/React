import React from "react";
class Product extends React.Component{

           state={
                p_name:"Guitar",
                Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2T6b7Qd68FtYJuTrfpocmC0Gn_u6-SybMg&usqp=CAU',
                price:7000,
                Qty:1
           }
           IncrHandler=()=>{

            this.setState({Qty:this.state.Qty+1})
           }
           DecrHandler=()=>{

            this.setState({Qty:this.state.Qty-1})
           }


       render(){
        console.log("Render Method")
        return(
            <div>
                <h3>Product Component</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <h2>Name:{this.state.p_name}</h2>
               <h2>Image:</h2> <img src={this.state.Image} alt="" />
                <h2>Price:{this.state.price*this.state.Qty}</h2>
                <h2>Qty:{this.state.Qty}</h2>
                <button className="btn btn-primary" onClick={this.IncrHandler}>Increment</button>
                <button className="btn btn-danger" onClick={this.DecrHandler}>Decrement</button>

            </div>
        )
       }

}
export default Product

