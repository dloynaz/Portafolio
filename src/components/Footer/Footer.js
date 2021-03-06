import React from 'react'
import { navigation as links } from '../../constants'
import { Link } from 'react-router-dom'
import './Footer.css'

import { github, Linkedin } from '../../assets/Icon'

function Footer() {
  


  return (
    <div className="footerBackground">
      <ul className="footerList">
        {links.map(link => (
          <li className="footerItem" >
            {<Link to={link.destination} style={{ color: 'inherit', textDecoration: 'none', marginRight:'20px' }} >{link.label}</Link>}
          </li>

        ))}
      </ul>  
      <a target="blank" className="icon" href="https://github.com/dloynaz" style={{ alignSelf:'center', width:'fit-content', margin:'20%', transition:'1s'}}><img src={github} style={{ height: '30px', borderRadius:'0.3rem'}}></img></a>
      <a target="blank" className="icon" href="https://www.linkedin.com/in/david-loynaz-52b6251b2/" style={{ alignSelf:'center', width:'fit-content', margin:'20%', transition:'1s'}}><img src={Linkedin} style={{ height: '30px', borderRadius:'0.3rem'}}></img></a>
    </div>
  )
}

export default Footer