import React from 'react';
import FixedMenu from './FixedMenu';
import Footer from './Footer';
import PageContent from './PageContent';
import './Page.css';

const Page = () => {
  return(
    <div className='page'>
      <FixedMenu/>
      <div className='flex-box'>
        <div className='navbar-placeholder'/>
        <PageContent/>
        <Footer/>
      </div>
    </div>
  )
}

export default Page;