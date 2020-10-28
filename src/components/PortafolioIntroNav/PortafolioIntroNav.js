import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import './PortafolioIntroNav.css';

function PortafolioIntroNav() {
    useEffect( () => {
    },[]);
    

    const [style, setStyle ] = useState({right: '20px', transition:'0.7s', position:'relative'})

    const onHover =() => {
        setStyle({right: '0px', transition:'0.7s', position:'relative'})
    }
    const onMouseLeave =() => {
        setStyle({right: '20px', transition:'0.7s', position:'relative'})
    }

    return (
        <div>
            <Link to='/portafolio/1' onMouseOver={onHover} onMouseLeave={onMouseLeave}>
                <h3 style={{ position: 'relative', bottom: '100px', float: 'right', marginRight: '20%', textDecoration: 'none', color: 'black'}}><span style={style}>➤</span> Let's review them!
            </h3>
            </Link>
        </div>
    )
}



export default PortafolioIntroNav