import React from 'react'
import { Link } from 'react-router-dom'
import {navigation as links} from '../../constants'
import './Nav.css'




function Nav() {
    return (
      <div className='navBackground'>
        <nav >
          <ul className="NavList">  
            {links.map((link) => (
                <li className="NavItem">
                  <Link to={link.destination} style={{  color: 'inherit', textDecoration: 'none' }} >{link.label}</Link>
                </li>
            ))}  
          </ul>
        </nav>
      </div>
    );
}

export default Nav




