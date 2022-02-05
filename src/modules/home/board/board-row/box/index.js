import React, { Component } from 'react'
import './box.css'

class Box extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render () {
    const { color, status, value, completed } = this.props.data
    if (status === 'hide' && this.props.completed === false) {
      return (
        <div className='inputView' style={{ borderColor: color }}>
          <h1 className='inputbox'>X</h1>
        </div>
      )
    } else {
      return (
        <div className='inputView' style={{ borderColor: color }}>
          <h1 className='inputbox'>{value}</h1>
        </div>
      )
    }
  }
}

export default Box
