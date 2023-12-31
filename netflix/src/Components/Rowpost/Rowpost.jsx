import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { API_KEY,ImageUrl } from '../../constants/constants'
function Rowpost() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
      console.log(response)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network error')
    })
  }, [])


  return (
  
    <div className='row'>
      <h2>Netflix Original</h2>
      <div className='posters'>
        {movies.map((obj)=>
          <img className='poster' src={`${ImageUrl+obj.backdrop_path}`} alt='' />
        )}
      </div>
    </div>
  )
}

export default Rowpost
