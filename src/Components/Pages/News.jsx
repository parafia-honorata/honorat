import React, {useEffect, useState} from 'react';
import './News.css';
import BlogService from '../../BlogService';
import parse from 'html-react-parser';
import { Button } from 'antd';
import {Link} from 'react-router-dom';

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

  return(
    <div className='news sub-page'>
      <div className='card blog'>
        <div className="above-news">
          <h2>Plan Wielkiego Tygodnia:</h2>
          <Link to={'/dodatkowe-informacje'}>
            <Button type="primary">Wielki Tydzień</Button>
          </Link>
        </div>
      </div>
      <div className='card blog'>
        {blogPost && blogPost.content &&
          parse(blogPost.content)
        }
      </div>
    </div>
  )
}

export default News;