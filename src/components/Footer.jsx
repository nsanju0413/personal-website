import React from 'react';
import './Footer.css'; // Import CSS file for footer styles

const Footer = () => {
    return (
        <footer className="footer">
            <p className="copyright">BSanju.in &copy; {new Date().getFullYear()}.</p>
        </footer>
    );
};

export default Footer;
