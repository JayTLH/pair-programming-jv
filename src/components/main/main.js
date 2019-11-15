import React, { Component } from 'react';
import Header from '../Header/header'
import Piano from '../Piano/piano';
import './main.scss'


export class Main extends Component {
    render() {
        return(
            
<>
        
                <Header />
            
                <div className="piano-section">
                     <Piano />
                </div>
</>
        )
    }
}


export default Main;