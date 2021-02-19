import React, {useEffect} from 'react';
import './Links.css';

const Links = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className='links'>
        <p>TEST STRONY</p>
    </div>
  )
}

export default Links;