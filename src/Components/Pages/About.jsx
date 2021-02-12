import React from 'react';
import './About.css';
import {Image} from 'antd';
import wikipic from '../../Assets/wikipic.jpg';
import pic21 from '../../Assets/pic21.jpg';
import Config from '../../Config';
import { Button } from 'antd';

const About = () => {
  return(
    <div className='about-page sub-page'>
        <h1>O parafii</h1>
        <div className='section history'>
          <div className='special'>
            <Image src={pic21} preview={false} alt='pic' className='vertical-image' />
          </div>
          <div className='text'>
            <h1>Krótka historia parafii</h1>
            <p>
              Historia parafii sięga 1989 roku. Z powodu rozległości i ilości wiernych parafii pw. św. Katarzyny,
              biskup ordynariusz Stanisław Nowak zlecił stworzenie wikariatu terenowego. Pierwszy jego duszpasterz –
              ksiądz Leszek Kołczyk, pozyskał od dyrekcji kopalni "Grodziec" lokal dla tworzącej się parafii.
            </p>
            <p>
              Pierwsza kaplica założona została w baraku otrzymanym z parafii św. Krzysztofa w Tychach. Już w 1990
              odprawiono tam pierwszą mszę i wybrano błogosławionego Honorata Koźmińskiego na patrona nowo powstającej
              parafii.
            </p>
            <p>
              Równo w nowej parafii zaczęto budowę nowego kościoła. Delegacja parafian spotkała się z Ojcem Świętym
              Janem Pawłem II, by ten pobłogosławił kamień węgielny. Uroczystego wmurowania kamienia dokonał biskup
              nowo utworzonej diecezji sosnowieckiej Adam Śmigielski.
            </p>
            <p>
              Po prawie dzięsięciu latach udało się zakończyć budowę. Kościół ma plan sześciokąta foremnego i może pomieścić
              około 500 osób. Szybka i sprawna budowa udała się dzięki wspaniałej ofiarności parafian. W 2000 roku nastąpiła
              uroczysta konsekracja świątynii.
            </p>
          </div>
        </div>
        <div className='section organisation'>
          <div className='special'>
            <Image src={wikipic} preview={false} alt='pic' className='vertical-image' />
          </div>
          <div className='text'>
            <h2>Rok świętego Józefa</h2>
            <p>
              Rok 2021 został przez papieża Franciszka ustanowiony rokiem świętego Józefa. Niestrudzona
              postawa męża Maryji, jego ogromna miłośc i niezłomna wiara, czynią go nie tylko wzorem świętości
              dla chrześcijan. Oprócz tego święty Józef uczy nas, czym jest męskość i w jaki sposób mężczyźni mogą
              realizować swoje powołanie.
            </p>
            <a href={Config.josephYearLink} target="_blank" rel="noreferrer">
              <Button type="primary">Więcej</Button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default About;