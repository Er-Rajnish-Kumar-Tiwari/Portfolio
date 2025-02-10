import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Header() {
  return (
    <div>
        <ul className='u1'>
            <li><Link to={'/Portfolio'} style={{textDecoration:"none",color:"purple",textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Home</Link></li>
            <li><Link to={'/About'} style={{textDecoration:"none",color:"purple",textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>About</Link></li>
            <li><Link to={'/Services'} style={{textDecoration:"none",color:"purple",textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Services</Link></li>
            <li><Link to={'/Education'} style={{textDecoration:"none",color:"purple",textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Education</Link></li>
            <li><Link to={'/Skills'} style={{textDecoration:"none",color:"purple",textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Skills</Link></li>
            <li><Link to={'/Projects'} style={{textDecoration:"none",color:"purple",textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>Projects</Link></li>
        </ul>

    </div>
  )
}
