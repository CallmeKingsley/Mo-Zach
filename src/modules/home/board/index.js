import React, { Component } from 'react'
import BoardRow from './board-row'
import { GenerateTask } from '../../../common/helper'
import './board.css'

class Board extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    console.log(GenerateTask())
    return (
      <div className='board'>
        <div className='goalView'>
          <BoardRow data={GenerateTask()} completed={this.props.completed} />
        </div>
        <div className='predictionView'>
          <BoardRow data={this.props.data[0]} />
          <BoardRow data={this.props.data[1]} />
          <BoardRow data={this.props.data[2]} />
          <BoardRow data={this.props.data[3]} />
          <BoardRow data={this.props.data[4]} />
          <BoardRow data={this.props.data[5]} />
        </div>
      </div>
    )
  }
}

export default Board
