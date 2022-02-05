import React, { Component } from 'react'
import Key from './key'

import './keyboard.css'

class Keyboard extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div className='keyboard'>
        <Key value='Enter' keyboardBtnPressed={this.props.keyboardBtnPressed} typeType='enter' />
        <Key value='A' keyboardBtnPressed={this.props.keyboardBtnPressed} />
        <Key value='Ab' keyboardBtnPressed={this.props.keyboardBtnPressed} />
        <Key value='B' keyboardBtnPressed={this.props.keyboardBtnPressed} />
        <Key value='Bb' keyboardBtnPressed={this.props.keyboardBtnPressed} />
        <Key value='C' keyboardBtnPressed={this.props.keyboardBtnPressed} />
        <Key value='D' keyboardBtnPressed={this.props.keyboardBtnPressed} />
        <Key value='E' keyboardBtnPressed={this.props.keyboardBtnPressed} />
        <Key value='Eb' keyboardBtnPressed={this.props.keyboardBtnPressed} />
        <Key value='F' keyboardBtnPressed={this.props.keyboardBtnPressed} />
        <Key value='G' keyboardBtnPressed={this.props.keyboardBtnPressed} />
        <Key value='Back' keyboardBtnPressed={this.props.keyboardBtnPressed} typeType='back' />
      </div>
    )
  }
}

export default Keyboard
