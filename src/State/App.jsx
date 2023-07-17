import Message from "./Message"
let App=()=>{
       let wish="Good Morning"
        

     return(
        <div>
            <h2>App Component</h2>
            <h3>wish:{wish}</h3>
            <hr />
            <Message/>  
        </div>
    )
}
export default App