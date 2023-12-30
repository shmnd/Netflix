import React, { useEffect, useState } from 'react'
import './Banner.css'
import  axios from '../../axios'
import { API_KEY,ImageUrl } from '../../constants/constants'

function Banner() {
  const [movie, setMoive] = useState()

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      const randomImg=response.data.results
      const randomIndex = Math.floor(Math.random() * randomImg.length);
      console.log(randomIndex) 
      setMoive(response.data.results[randomIndex])
    })
  }, [])

  return (
    <div style={{backgroundImage:`url(${movie ? ImageUrl+movie.backdrop_path: ''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ''}</h1>
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>my list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
