import React, { Component } from 'react';
import './black-button.scss';


export class BlackButton extends Component {

    render() {
        return(

        <div className="black-buttons">
            {/* first octave */}
            <div className="black-buttons__first-group">
                <button className="black-buttons__key-two" value="C#4" onClick={this.clickHandle}></button>
                <button className="black-buttons__key-two" value="D#4" onClick={this.clickHandle}></button>  
            </div>  
            <div className="black-buttons__second-group">   
                <button className="black-buttons__key-three" value="F#4" onClick={this.clickHandle}></button>         
                <button className="black-buttons__key-three" value="G#4" onClick={this.clickHandle}></button>          
                <button className="black-buttons__key-three" value="A#4" onClick={this.clickHandle}></button>
            </div>
            <div className="black-buttons__first-group">
                <button className="black-buttons__key-two" value="C#4" onClick={this.clickHandle}></button>
                <button className="black-buttons__key-two" value="D#4" onClick={this.clickHandle}></button>  
            </div>  
            <div className="black-buttons__second-group">   
                <button className="black-buttons__key-three" value="F#4" onClick={this.clickHandle}></button>         
                <button className="black-buttons__key-three" value="G#4" onClick={this.clickHandle}></button>          
                <button className="black-buttons__key-three" value="A#4" onClick={this.clickHandle}></button>
            </div>
        </div>
        )
    }
}
export default BlackButton;
