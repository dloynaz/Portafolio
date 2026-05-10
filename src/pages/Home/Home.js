import React, { useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom'

import { background } from '../../assets/PortafolioAsset/Video'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import HomeHook from '../../hooks/homeHook'
import { GlassmorphismCard } from '../../components'


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className='page' id="home">
      <video
        autoPlay
        loop
        muted
        controls={false}
        playsInline
        preload="metadata"
        className='Background'>
        <source src={background} type='video/webm' />
      </video>
      <div className="gridContainer">
        <div className="gridItemA">
          <h1 className="title">Hi! I'm David Loynaz and I love building beautiful websites</h1>
          <div className="AboutMe">
            <AnchorLink id="anchorLink" style={{ textDecoration: 'none' }} href='#about-me'>About Me</AnchorLink>
          </div>
        </div>
        <div className="gridItemB" >
          <GlassmorphismCard />
          <p id="about-me" style={{ fontSize: '1.4rem', borderBottom: 'solid', borderTop: 'solid', paddingTop: '5%', paddingBottom: '5%', borderWidth: 'thin' }}>
          I am a software engineer with a strong background in frontend architecture, scalable web applications, and client-facing solutions. I design
          
           and build accessible, performant user experiences using modern HTML, CSS, and JavaScript frameworks, especially React. I have hands-on experience integrating AI and LLM technologies into web applications, enabling intelligent features and enhanced user interactions. I thrive in remote and distributed teams, and I adapt quickly to the tools and workflows required by 
           the project. I hold dual nationality and am currently based in Central Europe, though 
           I previously worked from SJO, Costa Rica. I am fluent in Français, Español, and English. 
           <p id="about-me" style={{ fontSize: '1.4rem', paddingTop: '5%', paddingBottom: '5%', borderWidth: 'thin' }}>You can <Link to="/portfolio" className="aboutLink">visit my portfolio</Link> to see how I bring ideas to life.</p> I have experience with:<span><HomeHook /></span></p>
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


