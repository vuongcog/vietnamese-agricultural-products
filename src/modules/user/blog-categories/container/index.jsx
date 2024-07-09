import React from 'react';
import { createContext } from 'react';
import PropTypes from '../../../../utils/prop-types';
import BlogLayout from '../presentational';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_BLOG_CATEGORIES } from '../../../../actions/action-blog-categories';

const BlogUserContext = createContext({});
const BlogContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: FETCH_BLOG_CATEGORIES,
      payload: { endpoint: '/danhmucbaiviet' },
    });
  }, []);
  return (
    <BlogUserContext.Provider>
      <BlogLayout></BlogLayout>
    </BlogUserContext.Provider>
  );
};
BlogContainer.propTypes = {
  children: PropTypes.element,
};

export default BlogContainer;
