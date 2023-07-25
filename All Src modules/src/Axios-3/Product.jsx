// ComponentDidMount is a method which executes automatically after render method

import React, { Component } from 'react'
import axios from 'axios'
class Product extends Component {
            state={
              products:[]
            }
            componentDidMount(){
              axios.get("https://dummyjson.com/products")
                .then((response)=>{
                      console.log(response)
                      this.setState({products:response.data.products})
                })
                .catch((err)=>{console.log(err)})
            }
  render() {
    return (
      <div>
        <h3>Products Component</h3>
        <pre>{JSON.stringify(this.state.products)}</pre>
        <table className='table'>
          <thead>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
          </thead>
          <tbody>
            {
              this.state.products.map((value,index)=>{
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