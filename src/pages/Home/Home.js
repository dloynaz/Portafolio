import React, { useState, useEffect, Component } from 'react';
import './Home.css'
import { Link } from 'react-router-dom'

import { background } from '../../assets/PortafolioAsset/Video'


import {
  Perfil1,
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


function Home() {

  const [messageStyle, setmessageStyle] = useState({
    gridColumnStart: '1',
    margin: '0px',
    gridRowStart: '1',
    position: 'relative',
    top: "500px",
    zIndex: '-1',
    padding: '0px',
    opacity: '0',
    transition: '1s ',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',

  })

  const [message, setMessage] = useState('Click on me!')




  useEffect(() => {
    window.scrollTo(0, 0)

    const timer = setTimeout(() => {

      setmessageStyle(
        {

          gridColumnStart: '1',
          margin: '0px',
          gridRowStart: '1',
          position: 'relative',
          top: '650px',
          zIndex: '-1',
          padding: '0px',
          opacity: '1',
          transition: '1s ',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',

        }
      )
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const [Photo, setPhoto] = useState(Perfil1)
  const [Id, setId] = useState(2)

  const photoHover = () => {
    if (Id < 11) {
      setId(Id + 1)
      perfiles.map(item => Id == item.id ? setPhoto(item.photo) : null)
      setMessage('Hi!')
    }
    else if (Id > 6 && Id < 4){
      setId(Id + 1)
      setMessage('Hi!')
    }
    else if (Id > 8) {
      setId(2)
      perfiles.map(item => Id == item.id ? setPhoto(item.photo) : null)
    }
  }




  return (
    <div className='page' id="home" >
      <video
        autoPlay
        loop
        muted
        controls={false}
        width="100%" 
        height="100%"
        className='Background'
        playsinline >
        <source src={background} type='video/mp4' />
      </video>
      <div className="gridContainer">
        <div className="gridItemA">
          <h1 className="title">Hi! I'm David Loynaz and I love building beautiful websites</h1>
          <div className="AboutMe">
            <AnchorLink id="anchorLink" style={{ textDecoration: 'none' }} href='#about-me'>About Me</AnchorLink>
          </div>
        </div>
        <div className="gridItemB" >
          <img src={Photo} className="Perfil" onClick={photoHover} />
          <img src={Perfil3} className="Perfil" onClick={photoHover} style={{display:'none'}} />
          <img src={Perfil4} className="Perfil" onClick={photoHover} style={{display:'none'}} />
          <img src={Perfil5} className="Perfil" onClick={photoHover} style={{display:'none'}} />
          <img src={Perfil6} className="Perfil" onClick={photoHover} style={{display:'none'}} />
          <img src={Perfil7} className="Perfil" onClick={photoHover} style={{display:'none'}} />
          <img src={Perfil8} className="Perfil" onClick={photoHover} style={{display:'none'}} />
          <img src={Perfil9} className="Perfil" onClick={photoHover} style={{display:'none'}} />
          <img src={Perfil10} className="Perfil" onClick={photoHover} style={{display:'none'}} />
          <img src={Perfil11} className="Perfil" onClick={photoHover} style={{display:'none'}} />

          <p className="message" style={messageStyle}>{message}</p>
          <p id="about-me" style={{ fontSize: '1.4rem', borderBottom: 'solid', borderTop: 'solid', paddingTop: '5%', paddingBottom: '5%', borderWidth: 'thin' }}>
          I'm a junior front-end developer looking for a new role in an exciting company. 
          I have a degree in <b>Web Development</b>, <b>Front End Libraries</b> and 
          <b> JavaScript Algorithms and Data Structures</b>. I constantly try to keep 
          updating my practices to meet the needs of the workplace. I focus on writing accessible HTML, 
          using modern CSS practices and writing clean JavaScript. When writing JS code, 
          I mostly use React, but I can adapt to whatever tools are required. I'm based in SJO, 
          Costa Rica, but I'm happy working remotely and have experience with GitHub functionality. 
          When I'm not coding, you'll find me making experimental short-films, painting or 
          giving yoga classes. Je parle Français, Español and English. I also have experience 
          with:<span><HomeHook /></span></p>
        </div>
        <div className="gridItemC">
          <h1 className="contactText" style={{ gridColumnStart: '1', gridColumnEnd: '2', margin: '0px', width: '50%', justifySelf: 'center', alignSelf: 'center' }}>Interested in doing a project together?</h1>
          <div className="contactText" style={{ width: '60%', height: '1px', backgroundColor: 'black', margin: '0px', gridColumnStart: '2', alignSelf: 'center', justifySelf: 'center' }}></div>
          <Link to='/contact' className="linkContact"><p style={{ fontSize: '1rem', margin: 'auto' }}>Contant Me</p></Link>

        </div>
      </div>
    </div>
  )
}

export default Home


