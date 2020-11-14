import React from 'react';
import FixedMenu from './FixedMenu';
import Footer from './Footer';
import PageContent from './PageContent';
import './Page.css';

const Page = () => {
  return(
    <div className='page'>
      <FixedMenu/>
      <PageContent/>
      <Footer/>
    </div>
  )
}

export default Page;