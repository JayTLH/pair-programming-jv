import React, { Component } from 'react';
import './white-button.scss';


export class WhiteButton extends Component {

  render() {
    return (
      <div className="white-buttons">
        {/* first octave */}
        <button className="white-buttons__key" value="C4" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="D4" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="E4" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="F4" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="G4" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="A4" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="B4" onClick={this.props.clickButton}></button>

        {/* second octave */}
        <button className="white-buttons__key" value="C5" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="D5" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="E5" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="F5" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="G5" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="A5" onClick={this.props.clickButton}></button>
        <button className="white-buttons__key" value="B5" onClick={this.props.clickButton}></button>
      </div>
    )
  }
}
export default WhiteButton;
