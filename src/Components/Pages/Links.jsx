import React, {useEffect} from 'react';
import './Links.css';
import stockpic2 from '../../Assets/stock-pic2.jpg';
import {Image} from 'antd';

const Links = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className='links sub-page'>

        <div className='section card organisation'>
          <div className='special'>
            <Image src={stockpic2} preview={false} alt='pic' className='vertical-image' />
          </div>
          <div className='text'>
            <h1>Przydatne linki</h1>
            <ul>
              <li><a href='http://diecezja.sosnowiec.pl/' rel='noreferrer' target='_blank'>Strona diecezji</a> </li>
              <li><a href='https://biblia.deon.pl/' rel='noreferrer' target='_blank'>Pismo Święte</a></li>
              <li><a href='https://www.wiara.pl/' rel='noreferrer' target='_blank'>Wiara.pl</a></li>
              <li><a href='http://modlitwa.pl/' rel='noreferrer' target='_blank'>Modlitwa.pl</a></li>
              <li><a href='https://www.katolik.pl/?nom=1' rel='noreferrer' target='_blank'>Katolik.pl</a></li>
              <li><a href='https://www.teologia.pl/' rel='noreferrer' target='_blank'>Teologia.pl</a></li>
              <li><a href='https://opoka.org.pl/' rel='noreferrer' target='_blank'>Opoka.org.pl</a></li>
              <li><a href='https://niezbednik.niedziela.pl/' rel='noreferrer' target='_blank'>Niezbędnik Niedzieli</a></li>
              <li><a href='https://al-anon.org.pl/informacje-dla-sluzby/' rel='noreferrer' target='_blank'>Grupy Rodzinne Al-Anon</a></li>
              <li><a href='https://christianitas.org/' rel='noreferrer' target='_blank'>Christianitas</a></li>
              <li><a href='https://www.facebook.com/ParafiaHonorata/' rel='noreferrer' target='_blank'>Nasz profil Facebookowy</a></li>
              <li><a href='https://docs.google.com/document/d/11ABUCQNt68bjKYfPFnjRa4e7iGpvTIMm/edit?usp=sharing&ouid=117760918704177320189&rtpof=true&sd=true' rel='noreferrer' target='_blank'>Standardy Ochrony Dzieci w parafii</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Links;