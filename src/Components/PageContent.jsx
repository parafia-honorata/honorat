import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainPage from './Pages/MainPage';

const PageContent = () => {
  return(
    <div className=''>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={MainPage}/>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default PageContent;