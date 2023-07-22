import React from 'react'
import CompD from './CompD'
class CompC extends React.Component {
  render() {
    return (
      <div>
        <h3>CompC</h3>
        <pre>{JSON.stringify(this.props.Name1)}</pre>
        <hr />
        <CompD Name2={this.props.Name1}/>
        </div>
    )
  }
}

export default CompC
