import React, { useState, useEffect, Component } from 'react';
import './Home.css'
import background from "../../assets/FlipCupTexture06.mp4"
import { Link } from 'react-router-dom'


import {
  Perfil1, Perfil2,
  Perfil3, Perfil4,
  Perfil5, Perfil6,
  Perfil7, Perfil8,
  Perfil9, Perfil10,
  Perfil11

} from '../../assets/Perfiles'

import { perfiles } from '../../constants'





import { home as homeInfo } from '../../constants'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HomeHook from '../../hooks/homeHook'

import ReactPlayer from 'react-player'

function Home() {

  const [messageStyle, setmessageStyle] = useState({
    gridColumnStart: '1',
    margin: '0px',
    gridRowStart: '1',
    position: 'relative',
    top: '1000%',
    zIndex: '-1',
    padding: '0px',
    opacity: '0',
    transition: '1s ',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',

  })

  const [message, setMessage] = useState('Hover over!')

  const [displayVideo, setdisplayVideo] = useState({ opacity: '0' })



  useEffect(() => {
    window.scrollTo(0, 0)

    const timer = setTimeout(() => {

      setmessageStyle(
        {

          gridColumnStart: '1',
          margin: '0px',
          gridRowStart: '1',
          position: 'relative',
          top: '1670%',
          zIndex: '-1',
          padding: '0px',
          opacity: '1',
          transition: '1s ',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',

        }
      )
    }, 8000);

    const timer2 = setTimeout(() => {
      setdisplayVideo(
        {
          opacity: '1',
          transition: '1s'
        })

    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [Photo, setPhoto] = useState(Perfil1)
  const [Id, setId] = useState(0)

  const photoHover = () => {
    if (Id < 12) {
      setId(Id + 0.125)
      perfiles.map(item => Id == item.id ? setPhoto(item.photo) : null)
    }
    else if (Id > 11) {
      setId(0)
      setMessage('Hi!')

    }
  }




  return (
    <div className='page'>
      <ReactPlayer
        playsInline
        className='Background'
        url={background}
        playing={true}
        loop={true}
        volume={0.5}
        controls={false}
        height='400px'
        width='1250px'
        loop autoPlay
        onSeek={() => {
          console.log(ReactPlayer);
          }}
        style={displayVideo}
      />
      <div className="gridContainer">
        <div className="gridItemA">
          <h1 className="title">Hi! I'm David Loynaz and I love building beautiful websites</h1>
          <div className="AboutMe">
            <AnchorLink id="anchorLink" style={{ textDecoration: 'none' }} href='#about-me'>About Me</AnchorLink>
          </div>
        </div>
        <div className="gridItemB" >
          <img src={Photo} className="Perfil" onMouseMove={photoHover} />
          <p className="message"style={messageStyle}>{message}</p>
          <p   id="about-me" style={{ fontSize: '1.4rem', borderBottom: 'solid', borderTop: 'solid', paddingTop: '5%', paddingBottom: '5%', borderWidth: 'thin' }}>{homeInfo.map(item => {
            return item.description
          }
          )}<span><HomeHook /></span></p>
        </div>
        <div className="gridItemC">
          <h1 style={{ gridColumnStart: '1', gridColumnEnd: '2', margin: '0px', width: '50%', justifySelf: 'center', alignSelf: 'center' }}>Interested in doing a project together?</h1>
          <div style={{ width: '60%', height: '1px', backgroundColor: 'black', margin: '0px', gridColumnStart: '2', alignSelf: 'center', justifySelf: 'center' }}></div>
          <Link to='/contact' className="linkContact"><p style={{ fontSize: '1rem', margin: 'auto' }}>Contant Me</p></Link>

        </div>
      </div>
    </div>
  )
}

export default Home


