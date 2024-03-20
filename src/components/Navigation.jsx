import React from 'react';
import { Link } from "react-router-dom";
import './Components.css'
import HomePage from './Cats';
import Finance from './Finance';
import Drugs from './Drugs';

export default function Navigation() {
  return ( 
    <nav className="menu">
      <ul>
        <li>
          <Link to="/cats">Koty</Link>
          </li>
        <li>
          <Link to="/finance">Finanse</Link>
          </li>
        <li>
          <Link to="/drugs">Leki</Link>
        </li>
      </ul>
    </nav>
  )
}