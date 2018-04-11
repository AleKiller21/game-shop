import React from 'react';

import Switcher from '../Switcher';
import Sidebar from '../Sidebar/Sidebar';

function Main() {
    return (
        <div className='wrapper'>
            <Sidebar />
            <Switcher />
        </div>
    );
}

export default Main;