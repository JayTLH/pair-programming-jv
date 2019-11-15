import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

export class Header extends Component {
    render() {
        return(

            <header className="header">
                {/* <Link to="/"><div className="header__button-menu">Home</div></Link> */}

                <Link to="/piano"><div className="header__button-piano">Piano</div></Link>
            </header>

        )
    }
}
export default Header;