import React from 'react'
import './Hero.css'
const Hero = () => {
    const classWork = () => {
        console.log('I am clicked')
    }
  return (
    <div className='Hero'>
        <p>
            Basirat is a hero
        </p>
        <button onClick={classWork}>click me</button>
    </div>
  )
}

export default Hero

