import React from 'react';
import styles from './styles.module.scss';
import useProducerBlog from '../../../../../useCustom/user/useProducerBlog';
const BlogCategoriesList = () => {
  const { blogCategories } = useProducerBlog();
  return (
    <div className={styles.layout}>
      <h1>Tất cả bài viết</h1>
      <ol className={styles[`gradient-list`]}>
        {blogCategories?.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default BlogCategoriesList;
