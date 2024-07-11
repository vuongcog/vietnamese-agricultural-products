import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import useProducerBlog from '../../../../../useCustom/user/useProducerBlog';
const BlogWithCategory = ({ name }) => {
  const { blogs } = useProducerBlog();
  const navigate = useNavigate();
  return (
    <div className={styles.layout}>
      <h1>{`Tất cả bài viết liên quan đến ${name}`}</h1>
      <ol className={styles[`gradient-list`]}>
        {blogs?.map(item => (
          <li
            onClick={() => {
              navigate(`/customer/blogs/blog/${item.blog_slug}`);
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
