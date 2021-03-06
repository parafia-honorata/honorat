import React, {useEffect, useState} from 'react';
import './News.css';
import BlogService from '../../BlogService';
import ReactHtmlParser from "react-html-parser";

const News = () => {

  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    getBlogPost()
    window.scrollTo(0, 0);
  }, []);

  const getBlogPost = async () => {
    const blogItem = await BlogService.getNewsItem();
    setBlogPost(blogItem);
  }

  console.log('BLOG POST', blogPost);

  return(
    <div className='news sub-page'>
      <div className='card blog'>
        {blogPost && blogPost.content &&
          ReactHtmlParser(blogPost.content)
        }
      </div>
    </div>
  )
}

export default News;