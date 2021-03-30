import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Nav.scss';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="logo-container">
                    <Link to="/" style={{width: "100%"}}>
                        <img src="tradey-logo.svg" alt="logo"/>
                    </Link>
                </div>
                <div className="nav-buttons">
                    <Link to="/browse">
                        <button>Browse</button>
                    </Link>
                    <Link to="/about">
                        <button>About</button>
                    </Link>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/sign-up">
                        <button>Sign Up</button>
                    </Link>
                    <Link to="/add-item">
                        <button className="trade-btn">TRADE</button>
                    </Link>
                </div>
            </nav>
        )
    }
}
