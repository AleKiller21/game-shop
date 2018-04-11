import React from 'react';

import Switcher from '../Switcher';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

function Main() {
    return (
        <div className='wrapper'>
            <Sidebar />
            <div className='main-panel'>
                <Navbar />
                <div className="content">
                    <div className="container-fluid">
                        <Switcher />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;