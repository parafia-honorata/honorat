import React, {useEffect, useState} from 'react';
import {Image} from 'antd';
import stockpic2 from '../../Assets/stock-pic2.jpg';
import './News.css';
import BlogService from '../../BlogService';
import ReactHtmlParser from "react-html-parser";

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

  console.log('BLOG POST', blogPost);

  return(
    <div className='intensions sub-page'>
      <div className='section card organisation'>
          <div className='special'>
            <Image src={stockpic2} preview={false} alt='pic' className='vertical-image' />
          </div>
          <div className='text'>
            {blogPost && blogPost.content &&
              ReactHtmlParser(blogPost.content)
            }
          </div>
        </div>
    </div>
  )
}

export default Intensions;