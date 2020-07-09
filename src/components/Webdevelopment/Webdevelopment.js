import React, { useState, useEffect, Component } from 'react';

import { Watercolor } from '../../assets/PortafolioAsset/Video/index'

import { Web1 } from '../../assets/development'

import './Webdevelopment.css'

function Webdevelopment() {

    const [opacity, setOpacity] = useState({
        position: 'absolute',
        zIndex: '-1000',
        width: '100%',
        height: '100%',
        top: '50%',
        left: '50%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1',
        opacity: '0',
        transition: '1s'
    })

    useEffect(() => {
        const timer = setTimeout(() => {
     
            setOpacity({
                position: 'absolute',
                zIndex: '-1000',
                width: '100%',
                height: '100%',
                top: '50%',
                left: '50%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1',
                opacity: '1',
                transition: '1s'
            })

        }, 1000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className="page" style={{minHeight:'1000px', height:'100%'}}>
            <div className="devContainer">


                <img src={Web1} className="development" id='dev1'></img>


                <video 
                autoPlay
                loop 
                muted
                style={opacity} 
                id="myVideo"> 

                  <source src={Watercolor} type='video/mp4' />

                </video>
            </div>
        </div>
    )
}

export default Webdevelopment