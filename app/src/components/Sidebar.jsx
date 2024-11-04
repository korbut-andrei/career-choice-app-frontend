// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar" style={{ width: '250px', backgroundColor: '#f0f0f0', height: '100vh', padding: '20px' }}>
            <h2>My Sidebar</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/">Main</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
