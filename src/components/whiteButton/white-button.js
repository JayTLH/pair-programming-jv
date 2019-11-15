import React, { Component } from 'react';
import './white-button.scss';


export class WhiteButton extends Component {

    render() {
        return (
        <div className="white-buttons">
            {/* first octave */}
            <button className="white-buttons__key" value="C4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="D4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="E4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="F4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="G4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="A4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="B4" onClick={this.clickHandle}></button>

            {/* second octave */}
            <button className="white-buttons__key" value="C4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="D4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="E4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="F4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="G4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="A4" onClick={this.clickHandle}></button>
            <button className="white-buttons__key" value="B4" onClick={this.clickHandle}></button>
          </div>
        )
    }
}
export default WhiteButton;
