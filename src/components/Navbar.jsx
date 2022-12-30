import React from 'react'
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"> {props.title}  </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} className="mx-2"> Home  </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/about-us'}> About Us  </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/contact-us' className='mx-2'> Contact Us  </Link>
                        </li>
                        <li className="nav-item">
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

// Navbar.protoTdype = {
//     title: PropTypes.string,
// }

// if not passsing title form navbar component and we want to add the default title
// Navbar.defaultProps = {
//     title: "Default Title",
// }