import React from 'react'
import { Route, Switch } from "react-router-dom";
import MainPage from './Pages/MainPage';
import News from './Pages/News';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import './PageContent.css';
import OurPriests from './Pages/OurPriests';

const PageContent = () => {
  return(
    <div className='page-content'>
      <Switch>
        <Route path='/ogloszenia' component={News}/>
        <Route path='/o-parafii' component={About} />
        <Route path='/ksieza' component={OurPriests}/>
        <Route path='/galeria' component={Gallery} />
        <Route path='/linki' />
        <Route path='/' component={MainPage}/>
      </Switch>

    </div>
  )
}

export default PageContent;
