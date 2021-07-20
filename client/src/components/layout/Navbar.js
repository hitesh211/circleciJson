import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'
import DetailContext from '../../context/detail/detailContext'
import logo from '../../images/logo.png'

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const detailContext = useContext(DetailContext)

    const { isAuthenticated, logout, user } = authContext;
    const { clearDetails } = detailContext;
    const onLogout = () => {
        logout();
        clearDetails();
    }

    const authLinks = (

        <Fragment>
            <li>
                Hello!{' '}
                {user && user.name}
                <span> &#128587;</span>
            </li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt">
                    </i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );
    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/login'>Login</Link>
            </li>

        </Fragment>
    );
    return (
        <div className="navbar bg-primary">
            <img src={logo} className="logo" alt="logo here" />
            <ul className="nav__links">
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div >
    )
}


export default Navbar
