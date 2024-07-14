import React from 'react';
import BookIcon from '@mui/icons-material/Book';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import { Tooltip } from '@chakra-ui/react';

const BlogTitle = ({ blog_title }) => (
  <Tooltip placement="top" label={blog_title} aria-label="Full text">
    <div className={styles.container}>
      <BookIcon className={styles.icon} />
      <span className={styles.title}>{blog_title}</span>
    </div>
  </Tooltip>
);
BlogTitle.propTypes = {
  blog_title: PropTypes.string,
};

export default BlogTitle;
