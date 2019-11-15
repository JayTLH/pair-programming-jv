import React, { Component } from 'react';
import WhiteButton from '../whiteButton/white-button';
import BlackButton from '../blackButton/black-button'
import './piano.scss'

export class Piano extends Component {
    render() {
        return(
            <>
                <div>
                    <p className="piano-title">PIANO</p>
                </div>


            <section  className="piano">
                <div className="black-section">
                    <BlackButton />
                </div>

                <div className="white-section">
                    <WhiteButton />
                </div>
            </section>
            </>
        )
    }
}
export default Piano;