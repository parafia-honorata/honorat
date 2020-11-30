import React from 'react';
import { Carousel, Image } from 'antd';
import pic1 from '../../Assets/pic1.jpg';
import pic2 from '../../Assets/pic2.jpg';
import pic3 from '../../Assets/pic3.jpg';
import pic5 from '../../Assets/pic5.jpg';
import pic7 from '../../Assets/pic7.jpg';
import './MainPage.css';

const MainPage = () => {
  return(
    <div className='main-page'>

      <div className='section most-important'>
        <div className='special'>
          <Carousel autoplay={true} effect={'fade'}>
            <Image src={pic1} preview={false} alt='Pic1' className='carousel-image' />
            <Image src={pic2} preview={false} alt='Pic2' className='carousel-image' />
            <Image src={pic3} preview={false} alt='Pic3' className='carousel-image' />
          </Carousel>
        </div>
        <div className='text'>
          <h1>Parafia rzymskokatolicka pw. bł. Honorata Kuźmińskiego w Będzinie Grodźcu</h1>
          <h2>Msze Święte w niedzielę</h2>
          <ul>
            <li>8:00</li>
            <li>10:00</li>
            <li>11:30</li>
            <li>16:30</li>
          </ul>
          <h2>Msze Święte w dni powszednie</h2>
          <ul>
            <li>17:30</li>
          </ul>
          <h2>Kancelaria parafialna czynna</h2>
          <ul>
            <li>We wtorek 16:00 – 18:00</li>
          </ul>
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
          <Image src={pic5} preview={false} alt='pic5' className='vertical-image' />
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
      <div className='section patron'>
        <div className='special'>
          <Image src={pic7} preview={false} alt='Pic7' className='vertical-image' />
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