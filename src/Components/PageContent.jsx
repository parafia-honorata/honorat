import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainPage from './Pages/MainPage';
import './PageContent.css';

const PageContent = () => {
  return(
    <div className='page-content'>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={MainPage}/>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default PageContent;