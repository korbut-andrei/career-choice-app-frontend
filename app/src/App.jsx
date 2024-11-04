// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Main } from './pages/Main';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flex: 1, padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

{ }