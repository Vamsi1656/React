import CompB1 from "./CompB-1"
let CompB=(props)=>{
      let e_name="Pallavi"
    return(
        <div><h3>CompB</h3>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Name:{props.Name}</h3>
        <hr />
        <CompB1 x={"GM"} Name={e_name}/>
        </div>
    )
}
export default CompB