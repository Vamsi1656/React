import React from 'react'
import  {useState}  from 'react'
function Usestate() {
    let [name,setName]= useState("Virat")
    let [id,setId]=useState(101)
    let [details,setDetails]= useState([45000,"Virat@gmail.com"])
    let [city,setCity]= useState("Delhi")

    let NameHandler=()=>{
         setName("Nani")
    }
    let IdHandler=()=>{
        setId(102)
    }
    let DetailsHandler=()=>{
        setDetails([55000,"nani@gmail.com"])
    }
    let CityHandler=()=>{
            setCity("Hyd")
    }
  return (
    <div>
        <h2>Usestate component</h2>
        <pre>Name:{name}</pre>
        <pre>Id:{id}</pre>
        <pre>Details:{details}</pre>
        <pre>City:{JSON.stringify(city)}</pre>

        <button onClick={NameHandler}>Name</button>
        <button onClick={IdHandler}>Id</button>
        <button onClick={DetailsHandler}>Details</button>
        <button onClick={CityHandler}>City</button>
    </div>
  )
}

export default Usestate



// useState() hook in React is a hook that allows us to state variables in our functional components.