import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

const Header = () => {
    return (
        <div className="header-container">
            {/* <img className="header-image" src={logo} alt="" /> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/home">
                        <img className="header-image" src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Shop">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Order">Order Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/inventory">Manage Inventory Here</a>
                            </li>
                        </ul>
                        <div className="d-flex w-50">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit">Search</button>
                        </div>
                        <p className="cart-icon">{cartIcon} <small>0</small></p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;