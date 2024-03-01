import React, {useEffect, useState} from 'react';
import './OurPriests.css';
import {Image} from 'antd';
import rosarypic from '../../Assets/rosarypic.jpg';
import biblepic from '../../Assets/biblepic.jpg';
import pic5 from '../../Assets/pic5.jpg';
import BlogService from '../../BlogService';
import parse from 'html-react-parser';

const Groups = () => {

  const [bibleMeetingInfo, setBibleMeetingInfo] = useState(null);
  const [parishRoomInfo, setParishGroupInfo] = useState(null);

  const getBlogPost = async () => {
    const blogItem = await BlogService.getBibleGroup();
    setBibleMeetingInfo(blogItem);
  }

  const getparishRoomPost = async () => {
    const blogItem = await BlogService.getParishRoom();
    setParishGroupInfo(blogItem);
  }

  useEffect(() => {
    getBlogPost();
    getparishRoomPost();
    window.scrollTo(0, 0);
  }, []);

  
  return(
    <div className='our-priests sub-page'>
      <h1>Grupy</h1>
      <div className='section card rosary'>
        <div className='special'>
          <Image src={rosarypic} preview={false} alt='pic' className='vertical-image' />
        </div>
        <div className='text'>
          <h1>Żywy różaniec</h1>
          <p>Aktywna grupa żywego różańca zaprasza do dołączenia i wspólnej modlitwy.</p>
        </div>
      </div>

      <div className='section card bible-group'>
        <div className='special'>
          <Image src={biblepic} preview={false} alt='pic' className='vertical-image' />
        </div>
        <div className='text'>
          <h1>Koło biblijne</h1>
          <p>
            W naszej parafii odbywają się spotkania koła biblijnego. Około raz na trzy tygodnie zbieramy 
            się w bibliotece parafialnej. Wspólnie czytamy pismo i wymieniamy się naszymi spostrzeżeniami.
          </p>
          {(bibleMeetingInfo && bibleMeetingInfo.content) ?
            parse(bibleMeetingInfo.content)
            :
            <div class="lds-dual-ring"></div>
          }
        </div>
      </div>

      <div className='section card room'>
        <div className='special'>
          <Image src={pic5} preview={false} alt='pic' className='vertical-image' />
        </div>
        <div className='text'>
          <h1>Salka parafialna</h1>
          <p>Przy kościele znajduje się salka parafialna wyposażona w stoły do ping-ponga i piłkarzyków. Zapraszamy do kontaktu telefonicznego z koordynatorem:</p>
          {(bibleMeetingInfo && bibleMeetingInfo.content) ?
            parse(parishRoomInfo.content)
            :
            <div class="lds-dual-ring"></div>
          }
        </div>
      </div>
    </div>
  )
}

export default Groups;