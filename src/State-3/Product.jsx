import React from "react"
class Product extends React.Component{
              state={
                p_name:"Violin",
                Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGLvjw4BBGB6BtaJYgu8WdATC8BKAlkcsLQ&usqp=CAU',
                price:20000,
                Qty:1
              }
            IncrHandler=()=>{

                this.setState({Qty:this.state.Qty+1})
            }
            DecrHandler=()=>{

                this.setState({Qty:this.state.Qty-1})
            }

    render(){
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
              
        return(
              <div>
                
                <nav className="navbar navbar-dark bg-dark">
                    <a className="nav-brand text-white" href="./index.html">Product</a>
                </nav>
                <pre>{JSON.stringify(this.state)}</pre>
                  <div className="container">
                    <div className="row">
                        <div className="col-6">
                               <div className="card">
                                <h2 style={{backgroundColor:"red"}}>Violin for Music</h2>
                               </div>
                               <div className="cardbody" >
                                <h2 style={{color:"green"}}>Instrument Name:{this.state.p_name}</h2>
                                <img  src={this.state.Image} alt="" />
                                <h3 style={{color:"orange"}}>Price:{this.state.price*this.state.Qty}</h3>
                                <h3 style={{color:"brown"}}>Qty:{this.state.Qty}</h3>
                                <button onClick={this.IncrHandler} className="btn btn-success">+</button>
                                <button onClick={this.DecrHandler} className="btn btn-danger">-</button>
                               </div>
                                <p style={mystyle}>The violin is the smallest and highest-pitched of the instruments in the string family. It is related to a North African instrument called a rebab (a three-stringed instrument also played with a bow drawn across the strings). 
                                Violins have been traditionally used as an accompaniment to singing and dancing.</p>
                        </div>
                    </div>
                  </div>
                  

            </div>
        )
    }
}
export default Product