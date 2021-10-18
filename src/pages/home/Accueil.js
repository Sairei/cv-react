import React from 'react';
import Navigation from '../../components/Navigation';
import Content from './Content'

const Accueil = () => {
    return (
        <div className="home">
            <Navigation />
            <Content />
        </div>
    );
};

export default Accueil;