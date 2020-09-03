import React, { useEffect, useState } from 'react'
import { PortafolioIntroNav } from '../../components'
import { portafolioIntro } from '../../constants'
import './Portafolio.css'
import { Link } from 'react-router-dom'

import ReactPlayer from 'react-player'

import { Texture2 } from '../../assets/PortafolioAsset/Video'


function Portafolio(){

  const [webStyle, setWebStyle] = useState(
    {color:'black', transition:'2s'}
  )

  useEffect( () => {
    window.scrollTo(0, 0)
    
    const timer = setTimeout(() => {
      setWebStyle({color:'LightCoral', transition:'2s', fontSize:'100%'})
    }, 4500);

    const timer2 = setTimeout(() => {
      setWebStyle({color:'black', transition:'2s', fontSize:'100%'})
    }, 6000);   
    return () => clearTimeout(timer);
  }, [])

  
    return(
        <div style={{ height: "100vh"}} className='page' id="Portafolio">
        <div>
          <ReactPlayer
          playsInline
          url={Texture2}
          playing={true}
          loop={true}
          volume={0.5}
          controls={false}
          height='367px'
          width='1160px'
          loop autoPlay
          
          className="portafolioVideo"
          />
          <p style={{margin: '0 auto', backgroundColor:'White', zIndex:'1000', position:'relative', bottom:'200px', padding:'20px', fontSize:'1.5rem'}}>
          {portafolioIntro.map(info => info.Intro)}
          <Link to="/Certifications" style={webStyle}>{portafolioIntro.map(info => info.webDevelpment)}</Link>
          {portafolioIntro.map(info => info.Intro2)}  
          <Link to="/Certifications" style={webStyle}>{portafolioIntro.map(info => info.FCCfirst)}</Link> 
          {portafolioIntro.map(info => info.and)}  
          <Link to="/Certifications" style={webStyle}>{portafolioIntro.map(info => info.FCCsecond)}</Link> 
          </p>




        </div>
          <PortafolioIntroNav className='PortafolioIntroNav'/>
        </div>
    )
}

export default Portafolio