import React, { useState, useEffect, Component } from 'react';
import './Contact.css'
import { contact } from '../../constants'


import soundfile from "../../assets/MIRLOS.mp3"

import { Texture } from '../../assets/PortafolioAsset/Video/index'


function Contact() {

    const [lineStyle, setLineStyle] = useState('0px')
    document.documentElement.style.setProperty("--lineHeight", `${lineStyle}`)

    const [imgStyle, setImgStyle] = useState("150%")
    document.documentElement.style.setProperty("--imgLeft", `${imgStyle}`)

    const [titleAstyle, setTitleAstyle] = useState('0')
    document.documentElement.style.setProperty("--titleOpacity", `${titleAstyle}`)





    useEffect(() => {

        window.scrollTo(0, 0)


        const timer = setTimeout(() => {
            setImgStyle('0%')
        }, 2000);
        const timer2 = setTimeout(() => {
            setTitleAstyle("1")
            setLineStyle('500px')
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const onMouseEnter = () => {
        setLineStyle('300px')
        document.documentElement.style.setProperty("--lineHeight", `${lineStyle}`)
    }

    const onMouseLeave = () => {
        setLineStyle('500px')
        document.documentElement.style.setProperty("--lineHeight", `${lineStyle}`)
    }

    let [speed, setSpeed] = useState(8)

    const MouseEnter = () => {
        var vid = document.getElementById("myVideo");
        speed == 8 ? setSpeed(0.5) : setSpeed(8)
        vid.playbackRate = speed;


    }





    return (
        <div className='page' id="contact">
            <div className="titleWrapper1"onMouseEnter={MouseEnter} onMouseLeave={MouseEnter}>
                <h1 class="titleAstyle">{contact.map(item => item.message)}</h1>
            </div>
            <div className="titleWrapper2" onMouseEnter={MouseEnter} onMouseLeave={MouseEnter}>
                <a style={{ textDecoration: 'none', color: '#2F4F4F' }} href="mailto:davidloynazdev@gmail.com"><h2 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} class="titleAstyle">{contact.map(item => item.phoneNumber)}</h2></a>
            </div>
            <div className="titleWrapper3" onMouseEnter={MouseEnter} onMouseLeave={MouseEnter} >
                <h3 class="titleAstyle" >{contact.map(item => item.email)}</h3>
            </div>
            <div className="line" onMouseEnter={MouseEnter} onMouseLeave={MouseEnter} >
                <div class="lineStyle"></div>
            </div>
            <div className="videoWrapper" >
                <video
                    loop
                    autoPlay
                    className="image"
                    muted
                    id="myVideo"
                    onMouseEnter={MouseEnter} 
                    onMouseLeave={MouseEnter}
                    width="100%" 
                    height="100%" 
                >

                    <source src={Texture} type='video/mp4' />

                </video>
            </div>
            <audio src={soundfile} autoPlay />
        </div>
    )
}

export default Contact