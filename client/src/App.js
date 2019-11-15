import React, { Component } from 'react';
import Tone from 'tone';
import Axios from 'axios';

import './App.css';

let synth = new Tone.Synth().toMaster();
let recording = null;

export default class App extends Component {
  state = {
    oldRecording: null
  }

  getRecording = () => {
    Axios.get('http://localhost:8080/piano')
      .then(res => {
        this.setState({
          oldRecording: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  record = (e) => {
    e.preventDefault()
  }

  clickHandle = (e) => {
    let tone = e.target.value
    synth.triggerAttackRelease(tone, '8n')
    if (recording) {
      recording.push({ timestamp: Date.now(), note: tone })
    }
  }

  startRecord = () => {
    if (!recording) {
      recording = []
      recording.push({ timestamp: Date.now() })
    }
  }

  postRecord = () => {
    if (recording) {
      Axios.post('http://localhost:8080/piano', { recording })
        .then(res => {
          recording = null
          this.getRecording()
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

  playRecord = () => {
    if (this.state.oldRecording) {
      let noteList = this.state.oldRecording.recording
      let start = this.state.oldRecording.recording[0].timestamp

      // synth.triggerAttackRelease(noteList[0].note, '8n', ((noteList[0].timestamp - start) / 1000))

      this.state.oldRecording.recording.forEach(index => {
        synth.triggerAttackRelease(index.note, '8n', ((index.timestamp - start) / 1000))
      })
    }
  }

  componentDidMount() {
    this.getRecording()
  }

  render() {
    return (
      <form className="App" onSubmit={this.record}>
        <button onClick={this.startRecord}>RECORD</button><br />
        <button onClick={this.postRecord}>STOP</button><br />
        <button onClick={this.playRecord}>Play</button>
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
      </form>
    )
  }
}

