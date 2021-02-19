import React, {useEffect} from 'react';
import { Image } from 'antd';
import './Gallery.css';

import pic1 from '../../Assets/pic1.jpg';
import pic2 from '../../Assets/pic2.jpg';
import pic3 from '../../Assets/pic3.jpg';
import pic4 from '../../Assets/pic4.jpg';
import pic5 from '../../Assets/pic5.jpg';
import pic6 from '../../Assets/pic6.jpg';
import pic7 from '../../Assets/pic7.jpg';
import pic8 from '../../Assets/pic8.jpg';
import pic9 from '../../Assets/pic9.jpg';
import pic10 from '../../Assets/pic10.jpg';
import pic11 from '../../Assets/pic11.jpg';
import pic13 from '../../Assets/pic12.jpg';
import pic12 from '../../Assets/pic13.jpg';
import pic14 from '../../Assets/pic14.jpg';
import pic15 from '../../Assets/pic15.jpg';
import pic16 from '../../Assets/pic16.jpg';
import pic17 from '../../Assets/pic17.jpg';
import pic18 from '../../Assets/pic18.jpg';
import pic19 from '../../Assets/pic19.jpg';
import pic20 from '../../Assets/pic20.jpg';
import pic21 from '../../Assets/pic21.jpg';

const Gallery = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const imageLists = [
    pic1, 
    pic2, 
    pic3, 
    pic4, 
    pic5, 
    pic6, 
    pic7, 
    pic8, 
    pic9, 
    pic10, 
    pic11, 
    pic12, 
    pic13, 
    pic14, 
    pic15, 
    pic16, 
    pic17, 
    pic18, 
    pic19, 
    pic20, 
    pic21
  ]

  return(
    <div className='gallery sub-page'>
      <h1>Galeria</h1>
      <div className='gallery-image-zone'>
        {imageLists.map((image, index) => <div className='gallery-image'><Image src={image} key={index} alt='gallery-image' /></div>)}
      </div>
      
    </div>
  )
}

export default Gallery;