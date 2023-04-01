import React, {useEffect} from 'react';
import { Carousel, Image, Button } from 'antd';
import {Link} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

import Config from '../../Config';
import pic1 from '../../Assets/pic1.jpg';
import pic2 from '../../Assets/pic2.jpg';
import pic3 from '../../Assets/pic3.jpg';
import pic5 from '../../Assets/pic5.jpg';
import pic6 from '../../Assets/pic6.jpg';
import pic10 from '../../Assets/pic10.jpg';
import stockpic1 from '../../Assets/stockpic1.jpg';
import honorat from '../../Assets/honorat.jpg';
import mapa from '../../Assets/mapa.jpg';
import './MainPage.css';


const MainPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  return(
    <div className='main-page sub-page'>
      <div className='section card title'>
        <h1>Parafia Rzymskokatolicka <br /> pw. bł. Honorata Koźmińskiego <br /> w Będzinie-Grodźcu</h1>
      </div>
      <div className='section card special-info'>
        <h1>
          Wielki Tydzień 2023 <br /> 
          <Link to={'/dodatkowe-informacje'}>
            <Button type="primary">Szczegóły</Button>
          </Link>
        </h1>
      </div>
      <div className='section most-important'>
        <div className='carousel'>
          {isMobile ?
            <Carousel autoplay={true} effect={'fade'}>
              <Image src={pic5} preview={false} alt='Pic1' className='carousel-image' />
              <Image src={pic6} preview={false} alt='Pic2' className='carousel-image' />
              <Image src={pic10} preview={false} alt='Pic3' className='carousel-image' />
            </Carousel>
            : 
            <Carousel autoplay={true} effect={'fade'}>
              <Image src={pic1} preview={false} alt='Pic1' className='carousel-image' />
              <Image src={pic2} preview={false} alt='Pic2' className='carousel-image' />
              <Image src={pic3} preview={false} alt='Pic3' className='carousel-image' />
            </Carousel>
          }

        </div>
      </div>
      <div className='section card newest'>
        <div className='special'>
          <Image src={stockpic1} preview={false} alt='pic' className='vertical-image' />
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
          <Link to={'/ogloszenia'}>
            <Button type="primary">Ogłoszenia</Button>
          </Link>
        </div>
      </div>
      <div className='section card about reverted'>
        <div className='special'>
          <Image src={pic5} preview={false} alt='pic5' className='vertical-image' />
        </div>
        <div className='text'>
          <h2>O parafii</h2>
          <p>
            Parafia pw. błogosławionego Honorata Koźmińskiego została powołana stosunkowo niedawno i jest najmłodszą
            parafią w Będzinie-Grodźcu. Założono ją w celu posługi duszpasterskiej dla mieszkańców kopalnianego osiedla
            przy ulicy Konopnickiej. 
          </p>
          <p>
            Choć ustanowienia parafii dokonał biskup częstochowski Stanisław Nowak, obecnie należy ona do Diecezji Sosnowieckiej.
            Biskup Adam Śmigielski dokonał jej uroczystej konsekracji 15 października 2000 r.
          </p>
          <p>
            W parafii działa Koło Żywego Różańca. W każdą środę zmawiana jest Nowenna do Matki Bożej Nieustającej pomocy, a w piątki
            Koronka do Bożego Miłosierdzia.
          </p>
          <Link to={'/o-parafii'}>
            <Button type="primary">Więcej o parafii</Button>
          </Link>
        </div>
      </div>
      <div className='section card patron'>
        <div className='special'>
          <Image src={honorat} preview={false} alt='Pic7' className='vertical-image' />
        </div>
        <div className='text'>
          <h2>Błogosławiony Honorat Koźmiński</h2>
          <p>
            Życie błogosławionego Honorata pokazuje, że Pan Bóg ma dla każdego z nas plan, oraz że drogę do świętości poprzedza
            czasem zwątpienie i kryzys wiary. Buntownik z pobożnej inteligenckiej rodziny stał się jedną z najważniejszych postaci
            życia religijnego polaków pod zaborami.
          </p>
          <p>
            W młodości, idąc za przykładem ojca, uczył się na architekta. Wstąpił do płockiego gimnazjum. Zostaje doświadczony
            na wiele sposobów, młodzieńczym niedowiarstwem, przedwczesną śmiercą ojca, a wreszcie wtrąceniem do carskiego więzienia.
            Z warszawskiej Cytadeli wyszedł odmieniony. Po przeżytym nawróceniu stał się spokojny i pogodzony z Bogiem. Niedługo później
            rozpoczął swoje życie zakonne jako Kapucyn.
          </p>
          <p>
            W trudnych warunkach zaborów, nieustannie podejrzewany przez władzę rosyjskie o działalność wywrotową i konspirację, założył
            23 zgromadzenia zakonne i 26 stowarzyszeń tercjarskich. Jednocześnie też promował ukryte zgromadzenia zakonne, jako formę
            oporu wobec rosyjskiej opresji. Był uznanym spowiednikiem, tytanem pracy i niestrudzonym organizatorem. Zmarł w 1916 r. w 
            opinii świętości.
          </p>
        </div>
      </div>
      <div className='section card map reverted'>
        <div className='special'>
          <Image src={mapa} preview={false} alt='mapa' className='vertical-image' />
        </div>
        <div className='text'>
          <h3>Marii Konopnickiej 11A</h3>
          <h3>42-506 Będzin</h3>
          <h3>Email: parafiahonorat@gmail.com</h3>
          <h3>Tel: 690-649-750</h3>
          <a href={Config.googleMapLink} target="_blank" rel="noreferrer">
            <Button type="primary">Zobacz na mapie</Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MainPage;