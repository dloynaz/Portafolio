import React, { useState, useRef, useEffect } from 'react';
import './GlassmorphismCard.css';
import { Perfil1 } from '../../assets/Perfiles';

function GlassmorphismCard() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current || !isHovering) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({ x, y });

      // Tilt effect
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <div 
      className="glassmorphism-card"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glassmorphism-content">
        <img src={Perfil1} alt="Profile" className="glass-image" />
        <div className="glass-overlay"></div>
        <div className="glass-glow" style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}></div>
      </div>
    </div>
  );
}

export default GlassmorphismCard;
