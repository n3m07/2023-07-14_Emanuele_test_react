import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import MoreInfo from './components/MoreInfo';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Contacts from './components/Contacts';
import moviesArray from './components/movieArr';


/* THIS FUNCTION CONTAINS THE ROUTER PATHS */
function App() {
  /* console.log(moviesArray) */
  const [selectedMovie, setSelectedMovie]= useState('No Movie Selected')
  

  return(
    <>
    <Router className="w-screen h-screen bg-pink-300">
      {/* header is the nav menu which is common to each page of the router */}
      <Header/>
      <Routes>
        {/* the component home displays the list of each movie */}
        <Route index element={<Home selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}></Route>
        {/* the component 'more info' displays the detailed infos of the selected movie */}
        <Route path='/MoreInfo' element={<MoreInfo selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>} />
        {/* the contacts component simply diplays the contacts informations */}
        <Route path='/Contacts' element={<Contacts/>} />
        {/* the not found component is used in case the typed path does not correspond to any existing path */}
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
