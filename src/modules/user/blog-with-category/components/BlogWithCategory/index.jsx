import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import useProducerBlog from '../../../../../useCustom/user/useProducerBlog';
const BlogWithCategory = () => {
  const { blogs } = useProducerBlog();

  const navigate = useNavigate();
  return (
    <div className={styles.layout}>
      <ol className={styles[`gradient-list`]}>
        {blogs?.map(item => (
          <li
            onClick={() => {
              navigate(`/blogs/blog/${item.blog_slug}`);
            }}
            key={item.blog_title}
          >
            {item.blog_title}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BlogWithCategory;
