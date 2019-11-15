import React, { Component } from 'react';
import './header.scss'

export class Header extends Component {
    render() {
        return(

            <header className="header">
                <input className="header__button-menu" type="button" value="Menu"></input>

                <input className="header__button-piano" type="button" value="Piano"></input>
            </header>

        )
    }
}
export default Header;