import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{}} >
         <img src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Spinner