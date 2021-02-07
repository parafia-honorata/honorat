import React from 'react';
import './About.css';
import {Image} from 'antd';
import stockpic2 from '../../Assets/stock-pic2.jpg';
import pic21 from '../../Assets/pic21.jpg';

const About = () => {
  return(
    <div className='about-page sub-page'>
        <h1>O parafii</h1>
        <div className='section organisation'>
          <div className='special'>
            <Image src={stockpic2} preview={false} alt='pic' className='vertical-image' />
          </div>
          <div className='text'>
            <p>
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
                <li>W poniedziałek 18:10 – 19:00</li>
                <li>W czwartek 18:10 – 19:00</li>
              </ul>
            </p>
          </div>
        </div>
        <div className='section history'>
          <div className='special'>
            <Image src={pic21} preview={false} alt='pic' className='vertical-image' />
          </div>
          <div className='text'>
            <p>
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
                <li>W poniedziałek 18:10 – 19:00</li>
                <li>W czwartek 18:10 – 19:00</li>
              </ul>
            </p>
          </div>
        </div>
    </div>
  )
}

export default About;