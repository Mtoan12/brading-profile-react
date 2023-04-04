import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderStyle.css';
import './responsive.css';
export default function Header() {
    const { pathname } = useLocation();
    const checkActive = (nav) => {
        return pathname === nav && 'active';
    };
    return (
        <header id="header">
            <div className="header-info">
                <span className="full-name">Võ Mỹ Dung </span>
                <span className="job">
                    <span className="slash"> / </span>Project manager
                </span>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link className={`nav ${checkActive('/')}`} to="/">
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link className={`nav ${checkActive('/resume')}`} to="/resume">
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link className={`nav ${checkActive('/projects')}`} to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className={`nav ${checkActive('/me-myself-i')}`} to="/">
                            Me, Myself & I
                        </Link>
                    </li>
                    <li>
                        <Link className={`nav ${checkActive('/contact')}`} to="/">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
