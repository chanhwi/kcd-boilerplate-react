import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { TAB } from '../../utils/constants';

export interface IPageLayout {
    children: any, 
    activeTab: TAB, 
    setActiveTab: (tab: TAB) => void 
}

const PageLayout = ({ 
    children, 
    activeTab, 
    setActiveTab 
}:IPageLayout) => {
    return (
        <div className="page-layout">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            
            <main className="page-layout__main">
                <div className="container">
                <div className="page-layout__content">
                    {children}
                </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default PageLayout;