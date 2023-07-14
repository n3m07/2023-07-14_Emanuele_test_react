import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import MoreInfo from './components/MoreInfo';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Contacts from './components/Contacts';
import moviesArray from './components/movieArr';

function App() {
  /* console.log(moviesArray) */
  const [selectedMovie, setSelectedMovie]= useState('No Movie Selected')
  

  return(
    <>
    <Router className="w-screen h-screen bg-pink-300">
      <Header/>
      <Routes>
        <Route index element={<Home selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}></Route>
        <Route path='/MoreInfo' element={<MoreInfo selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>} />
        <Route path='/Contacts' element={<Contacts/>} />
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
