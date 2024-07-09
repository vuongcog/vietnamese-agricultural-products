import React from 'react';
import { createContext } from 'react';
import PropTypes from '../../../../utils/prop-types';
import BlogLayout from '../presentational';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FETCH_BLOG } from '../../../../actions/action-blog';

const BlogUserContext = createContext({});
const BlogGuestContainer = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: FETCH_BLOG,
      payload: { endpoint: `/chitietbaiviet/${slug}` },
    });
  }, []);
  return (
    <BlogUserContext.Provider>
      <BlogLayout></BlogLayout>
    </BlogUserContext.Provider>
  );
};
BlogGuestContainer.propTypes = {
  children: PropTypes.element,
};

export default BlogGuestContainer;
