import React, {useEffect} from 'react';
import './OurPriests.css';
import {Image} from 'antd';
import { useMediaQuery } from 'react-responsive'
import priestpic1 from '../../Assets/priestpic1.jpg';
import priestpic2 from '../../Assets/priestpic2.jpg';
import pic21 from '../../Assets/pic21.jpg';

const OurPriests = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return(
    <div className='our-priests sub-page'>
      <h1>Nasi Księża</h1>
      { isMobile ? 
        <React.Fragment>
          <div className='section card ks-marek'>
            <div className='special'>
              <Image src={priestpic1} preview={false} alt='pic' className='vertical-image' />
            </div>
            <div className='text'>
              <h2>Ksiądz Proboszcz Marek Zaręba</h2>
              <h3>Tel: 690-649-750</h3>
            </div>
          </div>
          <div className='section card ks-janusz reverted'>
            <div className='special'>
              <Image src={priestpic2} preview={false} alt='pic' className='vertical-image' />
            </div>
            <div className='text'>
              <h2>Ksiądz Wikariusz Janusz Pieśniewski</h2>
              <h3>Tel: 503-605-330</h3>
            </div>
          </div>
        </React.Fragment>
          :
          <div className='section card priests'>
            <div>
              <Image src={priestpic1} preview={false} alt='pic' className='vertical-image' />
              <h2>Ksiądz Proboszcz Marek Zaręba</h2>
              <h3>Tel: 690-649-750</h3>
            </div>
            <div>
              <Image src={priestpic2} preview={false} alt='pic' className='vertical-image' />
              <h2>Ksiądz Wikariusz Janusz Pieśniewski</h2>
              <h3>Tel: 503-605-330</h3>
            </div>
          </div>
      }

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
          <h2>Byli wikariusze</h2>
          <ul>
            <li>ks. Krzysztof Słomian</li>
            <li>ks. Mariusz Smętek</li>
            <li>ks. Dariusz Grojec</li>
            <li>ks. Tomasz Kaczur</li>
            <li>ks. Andrzej Uliniarz</li>
            <li>ks. Gerard Małodobry</li>
            <li>ks. Władysław Barcicki</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurPriests;