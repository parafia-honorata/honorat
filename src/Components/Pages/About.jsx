import React, {useEffect} from 'react';
import './About.css';
import {Image} from 'antd';
import pic22 from '../../Assets/pic22.jpg';
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
        <div className='section card organisation'>
          <div className='special'>
            <Image src={pic22} preview={false} alt='pic' className='vertical-image' />
          </div>
          <div className='text'>
            <h2>Rok Kościelny i Duszpasterski 2021/2022</h2>
            <h2>„Posłani w pokoju Chrystusa”</h2>
            <p>
              <i>Ten kto Mnie spożywa, będzie żył przeze Mnie"</i> (J 6,57)
            </p>
            <p>
              W roku 2022 realizujemy w Polsce kontynuacje Programu Duszpasterskiego „Eucharystia daje życie”. Kościół zachęca nas
              do dostrzeżena nadzwyczajnej roli Eucharystii w naszym życiu oraz rzeczywistej obecności Pana Jezusa w Najświętszym Sakramencie.
            </p>
            <p>
              Jak powiedział św. Jan Paweł II: „W Najświętszej Eucharystii zawiera się bowiem całe dobro duchowe Kościoła, to znaczy sam Chrystus, 
              nasza Pascha i Chleb żywy, który przez swoje ożywione przez Ducha Świętego i ożywiające Ciało daje życie ludziom. Dlatego też 
              Kościół nieustannie zwraca swe spojrzenie ku swojemu Panu, obecnemu w Sakramencie Ołtarza, w którym objawia On w pełni ogrom swej miłości”.
            </p>
          </div>
        </div>
    </div>
  )
}

export default About;