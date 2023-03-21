// import React from 'react';
import React from 'react';
import './AboutMeStyle.css';
import avatar from '../../img/avatar.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function AboutMe() {
    return (
        <motion.div
            id="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transitionDuration: 1, transitionTimingFunction: 'ease-in-out' }}
        >
            <div className="card">
                <div className="card-left">
                    <div className="card-head">
                        <img src={avatar} alt="" />
                        <span className="full-name">Võ Mỹ Dung</span>
                        <div className="line"></div>
                        <span className="job">Project manager</span>
                    </div>
                    <div className="social-icons">
                        <a href="https://facebook.com">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://instagram.com">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="card-content">
                    <h2>Hello</h2>
                    <h3>Here's who I am & what I do</h3>
                    <div className="card-buttons">
                        <Link className="btn card-resume-btn" to="/resume">
                            RESUME
                        </Link>
                        <Link className="btn card-projects-btn" to="/projects">
                            PROJECTS
                        </Link>
                    </div>
                    <p>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                        Just click “Edit Text” or double click me to add your own content and make
                        changes to the font.
                    </p>
                    <br />
                    <p>
                        I’m a great place for you to tell a story and let your users know a little
                        more about you.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
