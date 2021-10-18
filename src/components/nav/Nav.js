import React from 'react';

import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="navActive">
                        <i class="fas fa-home"> </i>
                        <span>Accueil</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/competences" activeClassName="navActive">
                        <i className="fas fa-cogs"> </i>
                        <span>Compétences</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/portfolio" activeClassName="navActive">
                        <i className="fas fa-images"> </i>
                        <span>Portfolio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" activeClassName="navActive">
                        <i className="fas fa-address-book"> </i>
                        <span>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Nav;