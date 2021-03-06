import React from 'react';
import './Header.css';
const Header = () => {
    return (
        // header section
        <div className="header-container">
            {/* bootstrap navbar is here */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
                <div className="container pe-0">
                    <a className="navbar-brand brand-name" href="/home">
                        DevelopersWorld
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/registration">Registration</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About Us</a>
                            </li>
                        </ul>
                        <div className="d-flex w-50">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </nav >
            {/* budget headings */}
            <div className="budget-headings">
                <h1>Welcome To Web Developers World!</h1>
                <h4 className="sub-headings">Hire! Worlds Most Experience Web Developers For Your Company.</h4>
                <h2>Total Budgets: $5 Million</h2>
            </div>
        </div >
    );
};

export default Header;