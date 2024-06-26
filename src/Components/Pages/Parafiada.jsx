import React, {useEffect, useState} from 'react';
import BlogService from '../../BlogService';
import parse from 'html-react-parser';

const Parafiada = () => {

  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    getBlogPost()
    window.scrollTo(0, 0);
  }, []);

  const getBlogPost = async () => {
    const blogItem = await BlogService.getParafiada();
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

export default Parafiada;