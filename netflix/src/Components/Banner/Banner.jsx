import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie name</h1>
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>my list</button>
            </div>
            <h1 className='description'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
