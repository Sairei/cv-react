import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Network from '../../components/nav/Network';

const Content = () => {
    return (
        <div className="contactContent">
            <div className="contactHeader"></div>
            
            <div className="contactBox">
                <h1>Contactez-moi</h1>
                <ul>
                    <li>
                        <i className="fas fa-map-marker-alt"/>
                        <span>Mérignac</span>
                    </li>
                    <li>
                        <i className="fas fa-mobile-alt"/>
                        <CopyToClipboard text="06 15 05 40 02">
                            <span className="clickInput" onClick={() => {alert('Téléphone copié !');}}>06 15 05 40 02</span>
                        </CopyToClipboard>
                    </li>
                    <li>
                        <i className="fas fa-envelope"/>
                        <CopyToClipboard text="christophercauet@hotmail.fr">
                            <span className="clickInput" onClick={() => {alert('Téléphone copié !');}}>christophercauet@hotmail.fr</span>
                        </CopyToClipboard>
                    </li>
                </ul>
            </div>

            <div className="contactNetwork">
                <ul> 
                    <a href="https://www.linkedin.com/in/christopher-cauet-67507a181/" target="_blank" rel="noopener noreferrer">
                        <h4>Linkedin</h4>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Sairei" target="_blank" rel="noopener noreferrer">
                        <h4>Github</h4>
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://twitter.com/Christo_Cauet" target="_blank" rel="noopener noreferrer">
                        <h4>Twitter</h4>
                        <i className="fab fa-twitter"></i>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Content;