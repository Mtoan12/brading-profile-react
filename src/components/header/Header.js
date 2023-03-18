import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css';
export default function Header() {
    return (
        <header id="header">
            <div className="header-info">
                <span className="full-name">Võ Mỹ Dung </span>
                <span className="job">/ Project manager</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">About me</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="/">Projects</Link>
                    </li>
                    <li>
                        <Link to="/">Me, Myself & I</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
