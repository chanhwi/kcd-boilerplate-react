// src/components/organisms/Header.js
import React from 'react';
import { TAB } from '../../utils/constants';

export interface IHeader {
    activeTab: TAB, 
    setActiveTab: (tab: TAB) => void 
}

const Header = ({ activeTab, setActiveTab }: IHeader) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <h1 className="logo">KCD Boilerplate</h1>
                    <nav>
                        <ul className="nav-list">
                            <li>
                                <button 
                                    onClick={() => setActiveTab(TAB.home)}
                                    className={activeTab === TAB.home ? 'nav-active' : ''}>
                                    홈
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => setActiveTab(TAB.zustandPage)}
                                    className={activeTab === TAB.zustandPage ? 'nav-active' : ''}>
                                    주스탠드
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => setActiveTab(TAB.contact)}
                                    className={activeTab === TAB.contact ? 'nav-active' : ''}>
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