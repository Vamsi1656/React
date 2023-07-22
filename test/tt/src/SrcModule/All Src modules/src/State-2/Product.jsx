import React from "react"
class Product extends React.Component{
           state={
            product:{
                p_name:"Violin",
                Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGLvjw4BBGB6BtaJYgu8WdATC8BKAlkcsLQ&usqp=CAU',
                price:10000,
                Qty:1
            }

        }
        IncrHandler=()=>{
            this.setState({product:{...this.state.product,Qty:this.state.product.Qty +1}})
        }
        DecrHandler=()=>{
            this.setState({product:{...this.state.product,Qty:this.state.product.Qty -1}})
        }

           

    render(){
        return(
            <div>
                <h3>Product Component</h3>
                <pre>{JSON.stringify(this.state.product)}</pre>
                <h2>Name:{this.state.product.p_name}</h2>
                <h2>Image</h2><img src={this.state.product.Image} alt="" />
                <h2>Price:{this.state.product.price*this.state.product.Qty}</h2>
                <h2>Qty:{this.state.product.Qty}</h2>
                <button className="btn btn-primary" onClick={this.IncrHandler}>INCR</button>
                <button className="btn btn-success" onClick={this.DecrHandler}>DECR</button>

                

            </div>
        )
    }
}
export default Product