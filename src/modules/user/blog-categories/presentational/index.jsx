import React from 'react';
import BlogCategoriesList from '../components/BlogCategoriesList';
import styles from './styles.module.scss';
import BlogCategoyGuest from '../../blog-with-category/container';
import { Divider } from '@chakra-ui/react';
const BlogLayout = () => (
  <div className={styles.layout}>
    <h1 className="text-[#255946]">Danh sách bài viết của webite</h1>
    <Divider></Divider>
    <div className={styles.overlay}>
      <div className={styles.categories}>
        <BlogCategoriesList></BlogCategoriesList>
      </div>
      {/* <div>
        <Divider orientation="vertical" borderWidth={1}></Divider>
      </div> */}
      <div>
        <BlogCategoyGuest></BlogCategoyGuest>
      </div>
    </div>
  </div>
);

export default BlogLayout;
