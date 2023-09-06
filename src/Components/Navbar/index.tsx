import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

export const Navbar = () => {
    return (
        <div className="nav-container">
            <header className="container">
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </nav>
            </header>
        </div>
    )
}