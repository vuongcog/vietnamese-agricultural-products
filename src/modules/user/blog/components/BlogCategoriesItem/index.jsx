import React from 'react';
import styles from './BlogCategoriesItem.module.scss';

const BlogCategoriesItem = ({ category }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{category.name}</h3>
      <p className={styles.description}>{category.description}</p>
    </div>
  );
};

export default BlogCategoriesItem;
