import React, { Component } from 'react';
import Tone from 'tone';
import Axios from 'axios';

import WhiteButton from '../whiteButton/white-button';
import BlackButton from '../blackButton/black-button'
import './piano.scss'

// global variables
let synth = new Tone.Synth().toMaster();
let recording = null;

export class Piano extends Component {
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
      let start = this.state.oldRecording.recording[0].timestamp

      this.state.oldRecording.recording.forEach(index => {
        if (index.note) {
          synth.triggerAttackRelease(index.note, '8n', ((index.timestamp - start) / 1000))
        }
      })
    }
  }

  componentDidMount() {
    this.getRecording()
  }

  render() {
    return (
      <>
        <div>
          <p className="piano-title">Piano</p>
        </div>
        <form onSubmit={this.record}>
          <div>
            <button onClick={this.startRecord}>RECORD</button>
            <button onClick={this.postRecord}>STOP</button>
            <button onClick={this.playRecord}>Play</button>
          </div>

          <section className="piano">
            <div className="black-section">
              <BlackButton clickButton={this.clickHandle} />
            </div>

            <div className="white-section">
              <WhiteButton clickButton={this.clickHandle} />
            </div>
          </section>
        </form>
      </>
    )
  }
}
export default Piano;