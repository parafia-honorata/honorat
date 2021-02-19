import React, {useEffect} from 'react';
import './OurPriests.css';
import {Image} from 'antd';
import stockpic2 from '../../Assets/stock-pic2.jpg';
import pic21 from '../../Assets/pic21.jpg';

const OurPriests = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return(
    <div className='our-priests sub-page'>
      <h1>Nasi Księża</h1>
      <div className='section card ks-marek'>
        <div className='special'>
          <Image src={stockpic2} preview={false} alt='pic' className='vertical-image' />
        </div>
        <div className='text'>
            <h2>Ksiądz Marek Zaręba</h2>
        </div>
      </div>
      <div className='section card ks-janusz reverted'>
        <div className='special'>
          <Image src={pic21} preview={false} alt='pic' className='vertical-image' />
        </div>
        <div className='text'>
          <h2>Ksiądz Janusz Pieśniewski</h2>
        </div>
      </div>
      <div className='section card ks-past'>
        <div className='special'>
          <Image src={pic21} preview={false} alt='pic' className='vertical-image' />
        </div>
        <div className='text'>
          <h2>Byli proboszczowie</h2>
          <ul>
            <li>ks. Leszek Kołczyk</li>
            <li>ks. Andrzej Gliszta</li>
            <li>ks. Czesław Mielczarek</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurPriests;