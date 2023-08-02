import React from 'react'
import Product from './Product/Product'
import { store } from './Redux/store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h2>App Component</h2>
        <hr />
        <Product/>
      </Provider>
    </div>
  )
}

export default App