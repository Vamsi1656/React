import React from 'react'

const Product = () => {
  
    let [id,setId]=React.useState("")
  React.useEffect=(()=>{
    let data=fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      console.log(data)
          setId(data)
    })
    .catch((err)=>{console.log(err.data)})
  })
  return (
    <div>
      <h2>Product Component</h2>
      <pre>{JSON.stringify(id)}</pre>
      </div>
  )
}

export default Product