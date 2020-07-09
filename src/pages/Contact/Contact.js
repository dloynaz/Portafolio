import React, { useState, useEffect, Component } from 'react';
import './Contact.css'
import { contact } from '../../constants'

import texture from '../../assets/CupTexture.jpg'

import soundfile from "../../assets/MIRLOS.mp3"

import { Texture } from '../../assets/PortafolioAsset/Video/index'


function Contact() {

    const [imgStyle, setImgStyle] = useState(
        {
            position: 'relative',
            left: '150%',
            height: '900px',
            transition: '3s',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            overflow: 'hidden',
            opacity: '1',
            zIndex:'10'

        })

    const [titleAstyle, setTitleAstyle] = useState(
        {
            opacity: '0',
            transition: '2.7s',
            zIndex:'-1000'
        }
    )
    const [lineStyle, setLineStyle] = useState({
        height: '0px',
        backgroundColor: 'black',
        width: '2px',
        position: 'relative',
        right: '100px',
        transition: '3s',
        transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',

    })



    useEffect(() => {

        window.scrollTo(0, 0)
   
        const timer0 = setTimeout(() => {
            setImgStyle({
                position: 'relative',
                left: '150%',
                height: '900px',
                transition: '3s',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                overflow: 'hidden',
                opacity: '1',
                zIndex:'10'
            })
        }, 1000);

        const timer = setTimeout(() => {
            setImgStyle({
                position: 'relative',
                left: '0%',
                height: '900px',
                transition: '3s',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                overflow: 'hidden',
                zIndex:'1000'


            })
        }, 2000);
        const timer2 = setTimeout(() => {
            setTitleAstyle({
                opacity: '1',
                transition: '2.5s',
                zIndex:'-10'
            })
            setLineStyle({
                height: '500px',
                backgroundColor: 'black',
                width: '2px',
                position: 'relative',
                right: '100px',
                transition: '3s',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'

            })
        }, 2350);
        return () => clearTimeout(timer);
    }, []);

    const onMouseEnter = () => {
        setLineStyle({
            height: '300px',
            backgroundColor: 'black',
            width: '2px',
            position: 'relative',
            right: '100px',
            transition: '3s',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',

        })
    }

    const onMouseLeave = () => {
        setLineStyle({
            height: '500px',
            backgroundColor: 'black',
            width: '2px',
            position: 'relative',
            right: '100px',
            transition: '3s',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',

        })
    }

    let [speed, setSpeed] = useState(8)

    const MouseEnter = () => {
        var vid = document.getElementById("myVideo");
        speed == 8 ? setSpeed(0.5) : setSpeed(8)
        vid.playbackRate = speed;


    }





    return (
        <div className='page' id="contact" style={{ height: '1000px', display: 'grid', gridTemplateColumns: ' 1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr', columnGap:'50px', width: '100%' }}>
            <div className="title"style={{ gridRowStart: '1', gridColumnStart: '2', alignSelf: 'end', justifySelf: 'left'}} onMouseEnter={MouseEnter} onMouseLeave={MouseEnter}>
                <h1 style={titleAstyle}>{contact.map(item => item.message)}</h1>
            </div>
            <div className="title2" style={{ gridRowStart: '2', gridColumnStart: '2', alignSelf: 'center', justifySelf: 'left' }} onMouseEnter={MouseEnter} onMouseLeave={MouseEnter}>
                <a style={{ textDecoration: 'none', color: '#2F4F4F' }} href="mailto:davidloynazdev@gmail.com"><h2 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={titleAstyle}>{contact.map(item => item.phoneNumber)}</h2></a>
            </div>
            <div className="title3"style={{ gridRowStart: '3', gridColumnStart: '2', alignSelf: 'start', justifySelf: 'left' }} onMouseEnter={MouseEnter} onMouseLeave={MouseEnter} >
                <h3 style={titleAstyle} >{contact.map(item => item.email)}</h3>
            </div>
            <div className="line"style={{ gridRowStart: '1', gridRowEnd: '4', alignSelf: 'center', justifySelf: 'center', gridColumnStart: '3' }} onMouseEnter={MouseEnter} onMouseLeave={MouseEnter} >
                <div style={lineStyle}></div>
            </div>
            <div className="video" style={{ gridRowStart: '1', gridRowEnd: '4', alignSelf: 'center', gridColumnStart: '1', justifySelf: 'center', height: 'auto', width: 'auto' }}>
                <video
                    loop
                    autoPlay
                    className="image"
                    muted
                    id="myVideo"
                    style={imgStyle}
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