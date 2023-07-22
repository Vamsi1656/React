import CompB from "./CompB"
let CompA=()=>{
    let e_Name="Nani"

    return (
        <div><h3>CompA</h3>
           
           <hr />
           <CompB prop1={"GM"} Name={e_Name}/>
        </div>
    )
}
export default CompA