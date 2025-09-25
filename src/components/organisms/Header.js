// src/components/organisms/Header.js
import React from 'react';

const Header = ({ activeTab, setActiveTab }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <h1 className="logo">KCD Boilerplate</h1>
                    <nav>
                        <ul className="nav-list">
                            <li>
                                <button 
                                    onClick={() => setActiveTab('home')}
                                    className={activeTab === 'home' ? 'nav-active' : ''}>
                                    홈
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => setActiveTab('about')}
                                    className={activeTab === 'about' ? 'nav-active' : ''}>
                                    소개
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => setActiveTab('contact')}
                                    className={activeTab === 'contact' ? 'nav-active' : ''}>
                                    연락처
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;