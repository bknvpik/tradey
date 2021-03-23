import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="logo-container">
                    <img src="tradey-logo.svg" alt="logo"/>
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
                        <button>Trade</button>
                    </Link>
                </div>
            </nav>
        )
    }
}
