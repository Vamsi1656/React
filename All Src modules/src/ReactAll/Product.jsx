import axios from "axios"
import React from "react"
class Product extends React.Component{
           state={
            products:[]
           }
           getProductHandler=(()=>{
                    axios.get("https://dummyjson.com/products")
                    .then((response)=>{console.log(response.data)
                        this.setState({products:response.data.products})})
                    .catch((err)=>{console.log(err)})
           })
    render(){

        return(
            <div>
                <h3>Product Component</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <button onClick={this.getProductHandler}>Get Products</button>
                <table className="table">
                    <thead className="bg-success text-white">
                        <th>ID</th>
                        <th>Product</th>
                        <th>Image</th>
                    </thead>
                    <tbody>
                        {this.state.products.map((products,index)=>{
                            return(
                                    <tr key={index}>
                                        <td>{products.id}</td>
                                        <td>{products.title}</td>
                                        <td><img src={products.images[0]}width={200} height={150} alt="" /></td>
                                    </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Product