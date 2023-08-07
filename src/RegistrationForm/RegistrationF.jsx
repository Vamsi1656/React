import React from 'react'

const RegistrationF = () => {
  return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="co-6">
                    <div className="card">
                            <div className="cardheader">
                            <h3>Registration form using Functional Component</h3>
                                <div className="cardbody">
                                <form>
                                        <div className='form-group'>
                                        <label></label>
                                        <input type="text" name="name"  className='form-control' placeholder='Name'/>
                                        </div>
                                        <div className='form-group'>
                                        <label></label>
                                        <input type="text" name="email"  className='form-control'  placeholder='Email'/>
                                        </div>
                                        <div className='form-group'>
                                        <label></label>
                                        <input type="text" name="mobilenumber"  className='form-control' placeholder='MobileNumber' />
                                        </div>
                                        <div className='form-group'>
                                        <label></label>
                                        <input value="India" type="text" disabled="disabled" className='form-control'/>
                                        </div>
                                        <div className='form-group'>
                                            <label></label>
                                            <input  type="password" placeholder='CreatePassword' className='form-control' />
                                        </div>
                                        <div className='form-group'>
                                            <label></label>
                                            <input type="password" placeholder='ConfirmPassword' className='form-control' />
                                        </div>
                                        <input type="submit" value={"Register"} className='bg-primary' />
                                    </form>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegistrationF