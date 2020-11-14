import React from 'react'
import FixedMenu from './FixedMenu'
import Footer from './Footer'
import PageContent from './PageContent'

const MainComponent = () => {
  return(
    <div className=''>
      <FixedMenu/>
      <PageContent/>
      <Footer/>
    </div>
  )
}

export default MainComponent;