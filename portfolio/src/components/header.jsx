// Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  
    return (
        <header className="header">
            <span className="brand">DJIATSA HEPHSZIBAH</span>
            <nav className="nav" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h5 data-target="hero" onClick={() => navigate('/')}>Home</h5>
                <h5 data-target="about" onClick={() => navigate('/about')}>About</h5>
                <h5 data-target="projects" onClick={() => navigate('/projects')}>Projects</h5>
                <h5 data-target="blog">Blog</h5>
                <h5 data-target="contact" onClick={() => navigate('/contact')}>Contact</h5>
            </nav>
            <div className="toggler"></div>
        </header>
    );
};

export default Header;