import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink  to="/" end activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/players" activeClassName="active">
            Players
          </NavLink>
        </li>
        <li>
          <NavLink to="/tournaments" activeClassName="active">
            Tournaments
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
