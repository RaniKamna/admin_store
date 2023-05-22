import React from 'react';
import { Link } from 'react-router-dom';
import { FaFlag } from "react-icons/fa";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fs-4">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">
                        <FaFlag />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Grocery Store</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Admin</Link>
                            </li>
                        </ul>
                        <div className="navbar-nav mb-2 mb-lg-0 d-flex">
                            <li className="nav-item">
                                <Link className="nav-link" to="/settings">Settings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
