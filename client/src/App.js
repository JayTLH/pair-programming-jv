import React, { Component } from 'react';
import Tone from 'tone';

import './App.css';

let synth = new Tone.Synth().toMaster();
let recording = null;

export default class App extends Component {
  record = (e) => {
    e.preventDefault()
  }

  clickHandle = (e) => {
    let tone = e.target.value
    synth.triggerAttackRelease(tone, '8n')
    if (recording) {
      recording.push({timestamp: Date.now(), note: synth.triggerAttackRelease(tone, '8n')})
    }
    console.log(recording)
  }

  startRecord = () => {
    if (!recording) {
      recording = []
      recording.push({timestamp: Date.now()})
    }
  }


  
  render() {
    return (
      <form className="App" onSubmit={this.record}>
        <button onClick={this.startRecord}>RECORD</button>
        <button onClick={this.postRecord}>STOP</button>
        <div>
          <button value="C3" onClick={this.clickHandle}>C</button>
          <button value="C#3" onClick={this.clickHandle}>C#</button>
          <button value="D3" onClick={this.clickHandle}>D</button>
          <button value="D#3" onClick={this.clickHandle}>D#</button>
          <button value="E3" onClick={this.clickHandle}>E</button>
          <button value="F3" onClick={this.clickHandle}>F</button>
          <button value="F#3" onClick={this.clickHandle}>F#</button>
          <button value="G3" onClick={this.clickHandle}>G</button>
          <button value="G#3" onClick={this.clickHandle}>G#</button>
          <button value="A3" onClick={this.clickHandle}>A</button>
          <button value="A#3" onClick={this.clickHandle}>A#</button>
          <button value="B3" onClick={this.clickHandle}>B</button>
        </div>
        <div>
          <button value="C4" onClick={this.clickHandle}>C</button>
          <button value="C#4" onClick={this.clickHandle}>C#</button>
          <button value="D4" onClick={this.clickHandle}>D</button>
          <button value="D#4" onClick={this.clickHandle}>D#</button>
          <button value="E4" onClick={this.clickHandle}>E</button>
          <button value="F4" onClick={this.clickHandle}>F</button>
          <button value="F#4" onClick={this.clickHandle}>F#</button>
          <button value="G4" onClick={this.clickHandle}>G</button>
          <button value="G#4" onClick={this.clickHandle}>G#</button>
          <button value="A4" onClick={this.clickHandle}>A</button>
          <button value="A#4" onClick={this.clickHandle}>A#</button>
          <button value="B4" onClick={this.clickHandle}>B</button>
        </div>
        <div>
          <button value="C5" onClick={this.clickHandle}>C</button>
          <button value="C#5" onClick={this.clickHandle}>C#</button>
          <button value="D5" onClick={this.clickHandle}>D</button>
          <button value="D#5" onClick={this.clickHandle}>D#</button>
          <button value="E5" onClick={this.clickHandle}>E</button>
          <button value="F5" onClick={this.clickHandle}>F</button>
          <button value="F#5" onClick={this.clickHandle}>F#</button>
          <button value="G5" onClick={this.clickHandle}>G</button>
          <button value="G#5" onClick={this.clickHandle}>G#</button>
          <button value="A5" onClick={this.clickHandle}>A</button>
          <button value="A#5" onClick={this.clickHandle}>A#</button>
          <button value="B5" onClick={this.clickHandle}>B</button>
          <button value="C6" onClick={this.clickHandle}>C</button>
        </div>
      </form>
    )
  }
}

