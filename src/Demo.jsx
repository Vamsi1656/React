import React from 'react'

const DigitalF = () => {
    let[ct,setCT]=React.useState(new Date().toLocaleTimeString())
    React.useEffect=(()=>{
        setInterval(()=>{
            setCT(new Date().toLocaleTimeString())
        },1000)
        return ()=>{
          console.log("Un Mounting component")
      }
    })
  return (
    <div>
        <h2>Digital Clock using Functional Component</h2>
        <pre>Ct:{ct}</pre>
        <h3>Current Time:{ct}</h3>
    </div>
  )
}

export default DigitalF