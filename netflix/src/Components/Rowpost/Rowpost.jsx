import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {ImageUrl } from '../../constants/constants'
function Rowpost(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network error')
    })
  }, [])


  return (
  
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
          <img alt='poster' className={props.isSmall ? 'smallposter' : props.isMedium ? 'mediumposter': 'poster'} 
          src={`${ImageUrl+obj.backdrop_path}`} />
        )}
      </div>
    </div>
  )
}

export default Rowpost
