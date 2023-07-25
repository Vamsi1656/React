import React, { Component } from 'react'
import axios from 'axios'
class Product extends Component {
    state={
        product:[]
         }
         getProductHandler=()=>{
                console.log("Test")
            axios.get("https://dummyjson.com/products")
            .then((response)=>{
                    console.log(response.data)
                    this.setState({product:response.data.products})
            })
            .catch((err)=>{
                    console.log(err)
            })
         }

  render() {
    console.log("Render Method")
    return (
      <div>
        <h3>Product Component</h3>
        <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.getProductHandler}>Get Products</button>
        <table className='table'>
            <thead>
                <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>IMAGE</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.product.map((value,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.title}</td>
                                    <td><img src={value.images[0]} width={200} height={150} alt="" /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>

        </table>
        </div>
    )
  }
}

export default Product