import React from 'react'
import { Route, Routes } from "react-router-dom";
import MainPage from './Pages/MainPage';
import News from './Pages/News';
import About from './Pages/About';
import './PageContent.css';
import OurPriests from './Pages/OurPriests';
import Intensions from './Pages/Intensions';
import Links from './Pages/Links';
import Retreat from "./Pages/Retreat";
import AdditionalInfo from './Pages/AdditionalInfo';
import Parafiada from './Pages/Parafiada';
import Groups from './Pages/Groups';

const PageContent = () => {

  return(
    <div className='page-content'>
      <Routes>
        <Route path='/ogloszenia' element={<News/>}/>
        <Route path='/o-parafii' element={<About/>} />
        <Route path='/ksieza' element={<OurPriests/>}/>
        <Route path='/linki' element={<Links/>} />
        <Route path='/intencje' element={<Intensions/>} />
        <Route path='/wielki-tydzien' element={<Retreat/>} />
        <Route path='/dodatkowe-informacje' element={<AdditionalInfo/>} />
        <Route path='/parafiada' element={<Parafiada/>} />
        <Route path='/grupy' element={<Groups />} />
        <Route path='/' element={<MainPage/>} />
      </Routes>

    </div>
  )
}

export default PageContent;
