import React, { Component } from 'react'
import './board-row.css'
import Box from './box'
import Asound from '../../../../common/sounds/A.mp3'
import Absound from '../../../../common/sounds/Ab.mp3'
import Bsound from '../../../../common/sounds/B.mp3'
import Bbsound from '../../../../common/sounds/Bb.mp3'
import Csound from '../../../../common/sounds/C.mp3'
import Dsound from '../../../../common/sounds/D.mp3'
import Fsound from '../../../../common/sounds/F.mp3'
import Esound from '../../../../common/sounds/E.mp3'
import Ebsound from '../../../../common/sounds/Eb.mp3'
import Gsound from '../../../../common/sounds/G.mp3'
import PlaybtnSVG from '../../../../common/images/playbtn.svg'

class BoardRow extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  playBtn =(row)=>{
    return (
      <div>
        <button className='playBtn' onClick={() => this.playSounds(row)}>
          <img src = {PlaybtnSVG}  className ='svgbtn'/>
        </button>
      </div>
    )
  }

  findSounds = (note) =>{
    var sound

    switch (note) {
      case 'A':
        sound = Asound
        break;
    
      case 'Ab':
        sound = Absound
        break;
      case 'B':
        sound = Bsound
        break;
      case 'Bb':
        sound = Bbsound
        break;
      case 'C':
        sound = Csound
        break;
      case 'D':
        sound = Dsound
        break;
      case 'E':
        sound = Esound
        break;
      case 'Eb':
        sound = Ebsound
        break;
      case 'F':
        sound = Fsound
        break;
      case 'G':
        sound = Gsound
        break;
      default:
        break;
    }

    return sound
  }

  playSounds =(row)=>{
    row.forEach(element => {
      const location  = this.findSounds(element.value)
      const sounds =  new Audio(location) 
      sounds.volume = 0.1
      sounds.play()
    });
  }

  render () {
    return (
      <div className='board-row' style={{ display: 'flex', flexDirection: 'row' }}>
        <Box data={this.props.data[0]} completed ={this.props.completed}/>
        <Box data={this.props.data[1]} completed ={this.props.completed}/>
        <Box data={this.props.data[2]} completed ={this.props.completed}/>
        <Box data={this.props.data[3]} completed ={this.props.completed}/>
        <Box data={this.props.data[4]} completed ={this.props.completed}/>
        <Box data={this.props.data[5]} completed ={this.props.completed}/>
        {this.playBtn(this.props.data)}
      </div>
    )
  }
}

export default BoardRow
