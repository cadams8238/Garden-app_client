import React from 'react';
import './styles/dashboard-header.css';

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <h1 className="logo">Phytochor</h1>
                <a href="#" className="menu">Menu</a>
            </nav>
        </header>
    );
}
