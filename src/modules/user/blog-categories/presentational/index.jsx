import React from 'react';
import BlogCategoriesList from '../components/BlogCategoriesList';
import styles from './styles.module.scss';
import BlogCategoyGuest from '../../blog-with-category/container';
const BlogLayout = () => (
  <div className={styles.layout}>
    <div>
      <BlogCategoriesList></BlogCategoriesList>
    </div>
    <div>
      <BlogCategoyGuest></BlogCategoyGuest>
    </div>
  </div>
);

export default BlogLayout;
