import React from 'react'
import Product from './Product'
const App = () => {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark'>
            <a href='./' className='navbar-brand'>Product Component using Axios and ComponentDidMount</a>
        </nav>
    
        <Product/>
        </div>
  )
}

export default App