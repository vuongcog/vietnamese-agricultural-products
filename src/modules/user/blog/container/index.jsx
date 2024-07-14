import React from 'react';
import { createContext } from 'react';
import PropTypes from '../../../../utils/prop-types';
import BlogLayout from '../presentational';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FETCH_ALL_BLOG, FETCH_BLOG } from '../../../../actions/action-blog';

const BlogUserContext = createContext({});
const BlogGuestContainer = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const handlerClickOthersBlog = item => {
    navigate(`/blogs/blog/${item.blog_slug}`);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    dispatch({
      type: FETCH_ALL_BLOG,
      payload: { endpoint: `/baiviet` },  
    });
    dispatch({
      type: FETCH_BLOG,
      payload: { endpoint: `/chitietbaiviet/${slug}` },
    });
  }, [location]);
  const value = {
    handlerClickOthersBlog,
  };
  return (
    <BlogUserContext.Provider>
      <BlogLayout {...value}></BlogLayout>
    </BlogUserContext.Provider>
  );
};
BlogGuestContainer.propTypes = {
  children: PropTypes.element,
};

export default BlogGuestContainer;
