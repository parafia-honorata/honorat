import React from 'react';
import FixedMenu from './FixedMenu';
import Footer from './Footer';
import PageContent from './PageContent';
import './Page.css';
import pic4 from "../Assets/pic4.jpg";

const Page = () => {

  return(
    <div className='page' style={{ backgroundImage:`url(${pic4})` }}>
      <FixedMenu/>
      <div className='flex-box'>
        <PageContent />
        <Footer/>
      </div>
    </div>
  )
}

export default Page;