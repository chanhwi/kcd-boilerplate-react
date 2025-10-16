import React, { useState } from 'react';
import './styles/style.css'
import PageLayout from './components/templates/PageLayout';

import Home from './pages/Home';
import ZustandPage from './pages/ZustandPage';
import Contact from './pages/Contact';
import { TAB } from './utils/constants';
import { TabStore } from './store/TabStore';

// 메인 App 컴포넌트
const App = () => {
    const { activeTab, setActiveTab } = TabStore();

    const renderPage = () => {
        switch(activeTab) {
            case TAB.home:
                return <Home />;
            case TAB.zustandPage:
                return <ZustandPage />;
            case TAB.contact:
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <PageLayout activeTab={activeTab} setActiveTab={setActiveTab}>
            {renderPage()}
        </PageLayout>
    );
}

export default App;