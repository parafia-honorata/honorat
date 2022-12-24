import React from 'react'
import { Route, Routes } from "react-router-dom";
import MainPage from './Pages/MainPage';
import News from './Pages/News';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import './PageContent.css';
import OurPriests from './Pages/OurPriests';
import Intensions from './Pages/Intensions';
import Links from './Pages/Links';
import Retreat from "./Pages/Retreat";
import Visits from './Pages/Visits';

const PageContent = () => {

  return(
    <div className='page-content'>
      <Routes>
        <Route path='/ogloszenia' element={<News/>}/>
        <Route path='/o-parafii' element={<About/>} />
        <Route path='/ksieza' element={<OurPriests/>}/>
        <Route path='/galeria' element={<Gallery/>} />
        <Route path='/linki' element={<Links/>} />
        <Route path='/intencje' element={<Intensions/>} />
        <Route path='/wielki-tydzien' element={<Retreat/>} />
        <Route path='/' element={<MainPage/>} />
        <Route path="/koleda" element={<Visits />} />
      </Routes>

    </div>
  )
}

export default PageContent;
