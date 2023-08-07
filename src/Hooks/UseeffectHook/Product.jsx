import React, { useEffect } from 'react'

const Product = () => {
  let [ids,setIds]=React.useState(0)

  let uphandler=()=>{
    setIds(ids+1)
  }
let effect=useEffect(()=>{console.log("first")});
  return (
    <div>
      <h2>Product Component</h2>
      <button onClick={uphandler}>Button</button>
      <pre>{JSON.stringify(ids)}</pre>
      {/* <pre>{JSON.stringify(id)}</pre> */}
      </div>
  )
}

export default Product