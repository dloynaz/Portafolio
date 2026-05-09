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
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [])

  
    return(
        <div style={{ height: "100vh"}} className='page' id="Portafolio">
        <div style={{overflowX:"hidden"}}>
          <ReactPlayer
          playsInline
          url={Texture2}
          playing={true}
          loop={true}
          volume={0.5}
          controls={false}
          height='367px'
          width='1160px'
          className="portafolioVideo"
          />
          <p className="textBox" style={{margin: '0 auto', backgroundColor:'White', position:'relative', bottom:'200px', padding:'20px', fontSize:'1.2rem'}}>
          {portafolioIntro.intro}
          {portafolioIntro.trainingIntro}
          <Link to="/Certifications" style={webStyle}>{portafolioIntro.trainingLinkText}</Link>
          {portafolioIntro.trainingOutro}
          <Link to="/Certifications" style={webStyle}>{portafolioIntro.fccFirst}</Link>
          {portafolioIntro.andText}
          <Link to="/Certifications" style={webStyle}>{portafolioIntro.fccSecond}</Link>
          {portafolioIntro.intro3}
          </p>




        </div>
          <PortafolioIntroNav className='PortafolioIntroNav'/>
        </div>
    )
}

export default Portafolio
