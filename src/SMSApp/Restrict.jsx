import React, { useState } from 'react'

const Restrict = () => {

    let [count,setCount]=useState(100)
       
    
    let countHandler=(event)=>{
        var lencount=event.target.value.length
        console.log(lencount)
        //var max_Len=count.maxlen
        var result=event.target.maxLength-lencount
        setCount(result )

    }

  return (
    <div>
        <h2>SMS Application Using Functional Component</h2>
        <hr />
        {/* <pre>{JSON.stringify(count)}</pre> */}
        
        <textarea rows={10} cols={100} maxLength={100} onChange={countHandler}></textarea>
        <hr />
        
        <h4>Remaining Characters:{count}</h4>
   </div>
  )
}

export default Restrict