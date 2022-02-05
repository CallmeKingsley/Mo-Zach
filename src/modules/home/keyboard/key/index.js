import React, { Component } from 'react'
import './Key.css'

class Key extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (value) {
    this.props.keyboardBtnPressed(value)
  }

  render () {
    if (this.props.typeType === 'enter') {
      return (
        <div>
          <button className='enterKey' onClick={() => this.handleChange(this.props.value)}>{this.props.value}</button>
        </div>
      )
    } else if (this.props.typeType === 'back') {
      return (
        <div>
          <button className='backkey' onClick={() => this.handleChange(this.props.value)}>{this.props.value}</button>
        </div>
      )
    } else {
      return (
        <div>
          <button className='key' onClick={() => this.handleChange(this.props.value)}>{this.props.value}</button>
        </div>
      )
    }
  }
}

export default Key
