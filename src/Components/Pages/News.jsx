import React, {useEffect, useState} from 'react';
import './News.css';
import BlogService from '../../BlogService';
import parse from 'html-react-parser';

const News = () => {

  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    getBlogPost()
    window.scrollTo(0, 0);
  }, []);

  const getBlogPost = async () => {
    const blogItem = await BlogService.getNews();
    setBlogPost(blogItem);
  }

  return(
    <div className='news sub-page'>
      <div className='card blog'>
        {(blogPost && blogPost.content) ?
          parse(blogPost.content)
          :
          <div class="lds-dual-ring"></div>
        }
      </div>
    </div>
  )
}

export default News;