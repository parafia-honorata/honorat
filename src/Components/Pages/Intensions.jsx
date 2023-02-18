import React, {useEffect, useState} from 'react';
import './Intensions.css';
import BlogService from '../../BlogService';
import parse from 'html-react-parser';

const Intensions = () => {

  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    getBlogPost()
    window.scrollTo(0, 0);
  }, []);

  const getBlogPost = async () => {
    const blogItem = await BlogService.getIntensionsItem();
    setBlogPost(blogItem);
  }

  return(
    <div className='intensions sub-page'>
      <div className='section card organisation'>
        <div className='text'>
          {(blogPost && blogPost.content) ?
            parse(blogPost.content)
            :
            <div class="lds-dual-ring"></div>
          }
        </div>
      </div>
    </div>
  )
}

export default Intensions;