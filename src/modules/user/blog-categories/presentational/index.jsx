import React from 'react';
import BlogCategoriesList from '../components/BlogCategoriesList';
import styles from './styles.module.scss';
const BlogLayout = () => (
  <div className={styles.layout}>
    <BlogCategoriesList></BlogCategoriesList>
  </div>
);

export default BlogLayout;
