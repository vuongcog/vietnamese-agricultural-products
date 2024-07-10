import React from 'react';
import BookIcon from '@mui/icons-material/Book';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';

const BlogTitle = ({ blog_title }) => (
  <div className={styles.container}>
    <BookIcon className={styles.icon} />
    <span className={styles.title}>{blog_title}</span>
  </div>
);
BlogTitle.propTypes = {
  blog_title: PropTypes.string,
};

export default BlogTitle;
