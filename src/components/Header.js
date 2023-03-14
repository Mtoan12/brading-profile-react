import React from 'react';
// import { Link } from 'react-router-dom';
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
                        <a href="/">About me</a>
                    </li>
                    <li>
                        <a href="/">Resume</a>
                    </li>
                    <li>
                        <a href="/">Projects</a>
                    </li>
                    <li>
                        <a href="/">Me, Myself & I</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
