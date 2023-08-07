import React, { Component } from 'react'

class RegistrationCC extends Component {
    state={
        name:"",
        email:"",
        mobilenumber:"",
        disabled:"true"
    }
    // getDataHandler=(event)=>{
    //     this.setState({[event.target.name]:event.target.value})
    // }
    getSubmitHandler=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
    changeHandler=(event)=>{
     
        // console.log(event.target.value)
            if(event.target.value.length > 6){
        this.setState({disabled:false})

            }

        }
  render() {
    return (
      <div>
        
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="cardheader bg-warning">
                        <h3>Registration form using class Component</h3>
                        {/* <pre>{JSON.stringify(this.state)}</pre> */}
                        </div><br />
                        <div className="cardbody">
                    <form onSubmit={this.getSubmitHandler}>
                        <div className='form-group'>
                        <label></label>
                        <input type="text" name="name" onChange={this.changeHandler} className='form-control' placeholder='Name'/>
                        </div>
                        <div className='form-group'>
                        <label></label>
                        <input type="text" name="email" onChange={this.changeHandler} className='form-control'  placeholder='Email'/>
                        </div>
                        <div className='form-group'>
                        <label></label>
                        <input type="text" name="mobilenumber" onChange={this.changeHandler} className='form-control' placeholder='MobileNumber' />
                        </div>
                        <div className='form-group'>
                        <label></label>
                        <input value="India" type="text" disabled="disabled" className='form-control'/>
                        </div>
                        <button disabled={this.state.disabled}>Register</button>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default RegistrationCC