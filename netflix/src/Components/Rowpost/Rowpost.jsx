import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY, ImageUrl } from '../../constants/constants'
function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const[urlId,setUrlId]= useState('')

  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('Network error')
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('not available')
      }
    })
  }
  return (
  
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)}  className={props.isSmall ? 'smallposter' : props.isMedium ? 'mediumposter': 'poster'} alt='poster' 
          src={`${ImageUrl+obj.backdrop_path}`} />
        )}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default Rowpost
