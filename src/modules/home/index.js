import React, { Component } from 'react'
import HeaderScreen from './header'
import Board from './board'
import Keyboard from './keyboard'
import {Generate2DArray,GenerateTask} from '../../common/helper'
import './home.css'


const DATA =  Generate2DArray()
class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ColumnIndex: 0,
      RowIndex: 0,
      completedGame: false,
      data : Generate2DArray(),
      forceUpdate: true
    }
  }

  keyboardBtnPressed =(value) =>{
    var uupdate  = this.state.forceUpdate
    var ColumnIndex  = this.state.ColumnIndex
   
    if(value === 'Enter'){
      if(this.verifyCompleteRow(DATA[this.state.RowIndex])){
        this.gradeCurrentRow(DATA[this.state.RowIndex])
      }
    }

    if(value === 'Back'){
      const newcol = this.state.ColumnIndex - 1
      DATA[this.state.RowIndex][newcol] = { value: null, status: null, color: 'gray'}

      this.setState({
        forceUpdate: !uupdate,
        ColumnIndex :  ColumnIndex - 1
      })
    }

    if(value !== 'Enter' && value !== 'Back'){
      if(ColumnIndex < 6){
        DATA[this.state.RowIndex][this.state.ColumnIndex] = { value: value, status: null, color: 'gray'}
        this.setState({
          forceUpdate: !uupdate,
          ColumnIndex :  ColumnIndex + 1
        })
      }
    }
    
  }

  verifyCompleteRow = (rowStack) =>{
    var isCompleteRow = true
    rowStack.forEach(element => {
        if(element.value === null){
          isCompleteRow = false
        }
    });
    return isCompleteRow
  }

  gradeCurrentRow = (rowStack) =>{
    const CorrectResult = GenerateTask()
    for(let i  = 0; i < rowStack.length; i++){
      if(rowStack[i].value === CorrectResult[i].value){
        DATA[this.state.RowIndex][i].color = 'green'
        DATA[this.state.RowIndex][i].status = 'correct'
      }else{
        DATA[this.state.RowIndex][i].color = 'orange'
        DATA[this.state.RowIndex][i].status = 'not correct'
      }
    }
    var uupdate  = this.state.forceUpdate
    var currentRow = this.state.RowIndex + 1

    if(currentRow < 6){
      this.setState({
        forceUpdate: !uupdate,
        RowIndex: currentRow,
        ColumnIndex :  0
      })
    }else{
      this.setState({
        forceUpdate: !uupdate,
        completedGame: true
      })
    }
    
  }

  render () {
    return (
      <div className='home'>
        <HeaderScreen />
        <Board data = {DATA}  completed ={this.state.completedGame}/>
        <Keyboard  keyboardBtnPressed ={this.keyboardBtnPressed}/>
      </div>
    )
  }
}
export default HomeScreen
