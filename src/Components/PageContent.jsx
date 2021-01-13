import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainPage from './Pages/MainPage';
import News from './Pages/News';
import About from './Pages/About'
import './PageContent.css';

const PageContent = () => {
  return(
    <div className='page-content'>
      <BrowserRouter>
        <Switch>
          <Route path='/ogloszenia' component={News}/>
          <Route path='/o-parafii' component={About} />
          <Route path='/patron' />
          <Route path='/ksieza' />
          <Route path='/kolo-zywego-rozanca' />
          <Route path='/galeria' />
          <Route path='/linki' />
          <Route path='/' component={MainPage}/>

        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default PageContent;
