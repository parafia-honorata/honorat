import React, {useEffect} from 'react';
import './About.css';
import {Image} from 'antd';
import pic21 from '../../Assets/pic21.jpg';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className='about-page sub-page'>
        <h1>O parafii</h1>
        <div className='section card history reverted'>
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
    </div>
  )
}

export default About;