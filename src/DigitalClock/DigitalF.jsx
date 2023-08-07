import React, {useEffect, useState} from 'react'

const DigitalF = () => {
    let [ct,setCT]=useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    setInterval(()=>{
         setCT(new Date().toLocaleTimeString())
    },1000)
  })
  return (
    <div>
        <h3>Digital Clock using Functional Component</h3>
        <pre>CT:{ct}</pre>
        <h2>Current Time:{ct}</h2>
    </div>
  )
}

export default DigitalF