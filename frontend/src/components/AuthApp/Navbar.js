import React from 'react';
import { Link, withRouter } from 'react-router-dom'

function Navbar(props) {
    const logout = e => {
        e.preventDefault()
        localStorage.removeItem('access_token')
        props.history.push(`/`)
    }

    const loginRegLink = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/login" className="nav-link">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            </li>
        </ul>
    )
    
    const userLink = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    Profile
                </Link>
            </li>
            <li className="nav-item">
                <a href="/" onClick={logout} className="nav-link">
                    Logout
                </a>
            </li>
        </ul>
    )
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="#navbar1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.access_token ? userLink : loginRegLink}
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navbar);