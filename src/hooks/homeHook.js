import React, { useState, useEffect } from 'react';
import { render } from '@testing-library/react'
import { home } from '../constants'


    const Timer = () => {
       
      const [seconds, setSeconds] = useState(0);
      const [isActive, setIsActive] = useState(true);
      const [word, setWord] = useState('Test-driven development')
    
      function toggle() {
        setIsActive(!isActive);
      }
    
      function reset() {
        setSeconds(0);
        setIsActive(false);
      }

      function wordFind() {
        let words = home.map(item => item.word)
        let find = words.map(item => item.find(i => i.id == seconds))
        let skill = find.map(item => item.skill)
        setWord(skill)
      }
    
      useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            //setWord(() => seconds == 3 || seconds == 10 ? 'three' : 'hello');
            wordFind()
          }, 1000);
          if (seconds == 20) { 
               setSeconds(0) }
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);
    
      return (
        <div className="app">
          <div className="time">
            {word}
          </div>
        </div>
      );
    };


export default Timer