import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Nav.scss';
import { AuthContext } from './AuthContext';

export default function Nav() {
    const { logged } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/" style={{width: "100%"}}>
                    <img src={process.env.PUBLIC_URL + '/tradey-logo.svg'} alt="logo"/>
                </Link>
            </div>
            {logged &&
            <div className="nav-buttons">
                <Link to="/browse">
                    <button>Browse</button>
                </Link>
                <Link to="/about">
                    <button>About</button>
                </Link>
                <Link to="/view-profile">
                    <button>My profile</button>
                </Link>
                <Link to="/sign-out">
                    <button>Sign out</button>
                </Link>
                <Link to="/add-item">
                    <button className="trade-btn">TRADE</button>
                </Link>
            </div>
            }
            {!logged &&
            <div className="nav-buttons">
                <Link to="/about">
                    <button>About</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/sign-up">
                    <button className="trade-btn">SIGN UP</button>
                </Link>
            </div>
            }
        </nav>
    )
}