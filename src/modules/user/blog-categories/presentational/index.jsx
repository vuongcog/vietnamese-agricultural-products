import React from 'react';
import BlogCategoriesList from '../components/BlogCategoriesList';
import styles from './styles.module.scss';
import BlogCategoyGuest from '../../blog-with-category/container';
import { Divider } from '@chakra-ui/react';
const BlogLayout = () => (
  <div className={styles.layout}>
    <div className={styles.categories}>
      <BlogCategoriesList></BlogCategoriesList>
    </div>
    <div>
      <Divider orientation="vertical" borderWidth={1}></Divider>
    </div>
    <div>
      <BlogCategoyGuest></BlogCategoyGuest>
    </div>
  </div>
);

export default BlogLayout;
