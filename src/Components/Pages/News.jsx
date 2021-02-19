import React, {useEffect} from 'react';
import './News.css';

const News = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className='news'>
        <p>TEST STRONY</p>
    </div>
  )
}

export default News;