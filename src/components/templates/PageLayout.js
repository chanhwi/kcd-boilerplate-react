import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const PageLayout = ({ 
    children, 
    activeTab, 
    setActiveTab 
}) => {
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