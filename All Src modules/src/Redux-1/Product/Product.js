import React from 'react'
import { incrAction,decrAction } from '../Redux/Product/product.action'
import { useDispatch, useSelector } from 'react-redux'
const Product = () => {
        let  dispatch = useDispatch();
       let product=useSelector((state)=>{
         return state
       })
  let incrHandler=()=>{

    dispatch(incrAction())
  }
  let decrHandler=()=>{

    dispatch(decrAction())
  }
  return (
    <div>
       <h2>Product Component</h2> 
       <pre>{JSON.stringify(product)}</pre>
       <button onClick={incrHandler}>+</button>
       Default Qty:{product.qty}
       <button onClick={decrHandler}>-</button>
    </div>
  )
}

export default Product