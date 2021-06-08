import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/components/Nav.scss';
import { AuthContext } from './AuthContext';
import OrangeButton from './OrangeButton';

export default function Nav() {
    const { logged } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/browse" style={{width: "100%"}}>
                    <img src={process.env.PUBLIC_URL + '/tradey-logo.svg'} alt="logo"/>
                </Link>
            </div>
            {logged &&
            <div className="nav-buttons">
                <NavLink to="/browse" activeClassName="active">
                    Browse
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/view-profile/about-me" activeClassName="active">
                    My profile
                </NavLink>
                <NavLink to="/add-item" activeClassName="active">
                    Add Item
                </NavLink>
                <NavLink to="/sign-out" activeClassName="active">
                    <OrangeButton text="SIGN OUT"/>
                </NavLink>
            </div>
            }
            {!logged &&
            <div className="nav-buttons">
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/login" activeClassName="active">
                    Login
                </NavLink>
                <NavLink to="/sign-up">
                    <OrangeButton text="SIGN UP"/>
                </NavLink>
            </div>
            }
        </nav>
    )
}