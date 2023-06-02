import React, {useEffect, useState} from 'react';
import './AdditionalInfo.css';
import BlogService from '../../BlogService';
import parse from 'html-react-parser';

const AdditionalInfo = () => {

  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    getBlogPost()
    window.scrollTo(0, 0);
  }, []);

  const getBlogPost = async () => {
    const blogItem = await BlogService.getAdditionalInfo();
    setBlogPost(blogItem);
  }

  return(
    <div className='intensions sub-page'>
      <div className='section card visits'>
        <div className='text'>
          {blogPost && blogPost.content &&
            parse(blogPost.content)
          }
        </div>
      </div>
    </div>
  )
}

export default AdditionalInfo;