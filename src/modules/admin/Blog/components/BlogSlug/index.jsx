import React from 'react';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
import { Tooltip } from '@chakra-ui/react';

const BlogSlug = ({ blog_slug }) => (
  <Tooltip placement="top" label={blog_slug} aria-label="Full text">
    <div className={styles.container}>{blog_slug}</div>
  </Tooltip>
);
BlogSlug.propTypes = {
  blog_slug: PropTypes.string,
};

export default BlogSlug;
