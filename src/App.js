import React, { useState } from 'react';
import './styles/style.css'
import PageLayout from './components/templates/PageLayout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// 메인 App 컴포넌트
const App = () => {
    const [activeTab, setActiveTab] = useState('home');

    const renderPage = () => {
        switch(activeTab) {
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'contact':
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