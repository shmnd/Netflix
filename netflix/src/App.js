import './App.css';
import{original,action,comdey,trending,documentaries,horrorMovies} from './urls'
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';

function App() {
  return (
    <div className='App'>
     <Navbar/>
     <Banner/>
     <Rowpost url={original} title='Netflix Originals'/>
     <Rowpost url={trending} title='Trending' isMedium/>
     <Rowpost url={horrorMovies} title='HorrorMovies' isSmall/>
     <Rowpost url={action} title='Action' isSmall/>
     <Rowpost url={documentaries} title='Documentaries' isSmall/>
     <Rowpost url={comdey} title='Comedy' isSmall/>

     HorrorMovies

 
    </div>
  );
}

export default App;
