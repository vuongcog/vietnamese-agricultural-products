import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogWithCategory from '../components/BlogWithCategory';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_BLOGS_WITH_CATEGORY } from '../../../../actions/action-blog';

const BlogCategoyGuest = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: FETCH_BLOGS_WITH_CATEGORY,
      payload: { endpoint: `/baiviet-danhmuc/${category}` },
    });
  }, []);
  return (
    <div>
      <BlogWithCategory></BlogWithCategory>
    </div>
  );
};

export default BlogCategoyGuest;
