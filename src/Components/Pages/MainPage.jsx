import React from 'react';
import pic1 from '../../Assets/pic1.jpg';
import './MainPage.css';

const MainPage = () => {
  return(
    <div className='main-page'>
      <div className='section most-important'>
        <div className='special'>
          <img src={pic1} alt='Pic1' className='standard-pic'/>
        </div>
        <div className='text'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className='section newest'>
        <div className='special'>

        </div>
        <div className='text'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className='section about'>
        <div className='special'>

        </div>
        <div className='text'>
          
        </div>
      </div>
      <div className='section patron'>
        <div className='special'>

        </div>
        <div className='text'>
          
        </div>
      </div>
      <div className='section our-priests'>
        <div className='special'>

        </div>
        <div className='text'>
          
        </div>
      </div>
      <div className='section map'>
        <div className='special'>

        </div>
        <div className='text'>
          
        </div>
      </div>
    </div>
  )
}

export default MainPage;