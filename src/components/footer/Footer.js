import React from 'react';
import './FooterStyle.css';
import './responsive.css';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
export default function Footer() {
    return (
        <footer>
            <div className="copyright">
                <span>
                    <AiOutlineCopyrightCircle /> 2035 by Maya Nelson.
                </span>
                <span> Powered and secured by Wix</span>
            </div>
            <div className="contacts">
                <div className="contact-item contact-call">
                    <span>Call</span>
                    <a href="tel:1234567890">123-456-7890</a>
                </div>
                <div className="contact-item contact-write">
                    <span>Write</span>
                    <a href="mailto:1234567890">info@mysite.com</a>
                </div>
                <div className="contact-item contact-follow">
                    <span>Follow</span>
                    <div className="contact-socials">
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
            </div>
        </footer>
    );
}
