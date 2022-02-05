import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div className='header'>
        <div>
          <h3> info</h3>
        </div>
        <div>
          <h1 className='title-text'> Mo(Zach)</h1>
        </div>
        <div>
          <h3> settings</h3>
        </div>
      </div>
    )
  }
}

export default Header
