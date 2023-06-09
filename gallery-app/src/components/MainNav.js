import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to="/galaxy">Galaxy</NavLink>
            </li>
            <li>
                <NavLink to="/dogs">Dogs</NavLink>
            </li>
            <li>
                <NavLink to="/computers">Computers</NavLink>
            </li>
        </ul>
    </nav>
  );
};

export default MainNav;

