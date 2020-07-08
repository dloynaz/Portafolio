import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Particles from 'react-particles-js';


import { portafolio } from '../constants';

import { ObraSanJorge, ObraSanJorgeB, ObraSanJorgeC } from '../assets/PortafolioAsset';
import { video1Dashboard, video2Dashboard } from '../assets/PortafolioAsset/Video/index';

import './portafolioHook.css';

import PortafolioNav from '../components/PortafolioNav/PortafolioNav'



function PortafolioHook({ match }) {


    const [portafolioId, setPortafolio] = useState({})
    const [buttonStyle, setbuttonStyle] = useState(
        {
            color: 'inherit',
            textDecoration: 'none', 
            fontSize: '1.5rem',
            opacity:'0',
            transition:'2s'
        }
    )

    const [particles, setParticles] = useState(
        { 
            height: '100%', 
            opacity:'0',
            transition: '2s'
        })

    const [opacity, setOpacity] = useState(
        {
            opacity:'0',
            transition:'2s'
        }
    )

    useEffect(() => {
        fetch();
        const timer = setTimeout(() => {
            window.scrollTo(0, 0)
            setbuttonStyle(
                {
                    color: 'inherit',
                    textDecoration: 'none', 
                    fontSize: '1.5rem',
                    opacity:'1',
                    transition:'2s'
                }
            )

            setParticles({
                height: '100%', 
                opacity:'1',
                transition: '2s'
            })

            setOpacity({
                opacity:'1',
                transition:'2s'
            })

        }, 1000);
        return () => clearTimeout(timer);
    }, [match]);






const fetch = async () => {
    const found = await portafolio.find(item => item.id == match.params.id)
    setPortafolio(found)
}

const onclick = () => {
    setbuttonStyle()
}


return (
    <div style={{ marginLeft: '10%', marginRight: '10%', marginBottom: '5%', minWidth:'700px'}} className="page">
        <div className="portafolioGridContainer">
            <div className='videoA'>
                <ReactPlayer className="player"
                    playsInline
                    poster="/assets/poster.png"
                    url={portafolioId.video1}
                    playing={true}
                    loop={true}
                    volume={0.1}
                    controls={false}
                    width='100%'
                    height='100%'
                    loop autoPlay
                />
            </div>
            <div className="infoA" style={opacity}>
                <h1 className="title">{portafolioId.name}</h1>
                <p className="description" >{portafolioId.description}</p>
                <p className="tech1">{portafolioId.tech1}</p>
                <p className="tech2">{portafolioId.tech2}</p>
            </div>
            <div className="infoB">
                <h2 className="Project-Background">Project Background</h2>
                <p className="background" >{portafolioId.background}</p>
            </div>
            <div className="particles">
                <Particles style={particles}
                    params={{
                        particles: {
                            color: {
                                value: "#000000"
                            },
                            line_linked: {
                                color: {
                                    value: "#000000"
                                }
                            },
                            number: {
                                value: 200,
                                density: {
                                    enable: true,
                                    value_area: 1000,
                                }
                            },

                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                }
                            }
                        }
                    }}
                />
            </div>
            <ReactPlayer
                playsInline
                poster="/assets/poster.png"
                url={portafolioId.video2}
                playing={true}
                loop={true}
                volume={0.5}
                controls={false}
                width='66%'
                height='66%'
                loop autoPlay
                className='videoB'
                style={opacity}
            />

            <div className="visit">
                <a target="_blank" href={portafolioId.link} className="clickButton"
                    onclick={onclick}
                    style={buttonStyle}>{portafolioId.visit}
                </a>

            </div>

        </div>
        <PortafolioNav id={match.params.id} name={portafolioId.name} />
    </div>
);
}

export default PortafolioHook
