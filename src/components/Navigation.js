import React from 'react';

import Presentation from './nav/Presentation';
import Nav from './nav/Nav';
import Network from './nav/Network';
import Signature from './nav/Signature';

const Navigation = () => {
    return (
        <div className="sidebar">
            <Presentation />

            <Nav />

            <Network />

            <Signature />
        </div>
    );
};

export default Navigation;