import React from 'react';
import styles from './styles.module.scss';
import useProducerBlog from '../../../../../useCustom/user/useProducerBlog';
import { useNavigate } from 'react-router-dom';
const BlogCategoriesList = () => {
  const { blogCategories } = useProducerBlog();
  const navigate = useNavigate();
  return (
    <div className={styles.layout}>
      <h1>Tất cả danh mục</h1>
      <ol className={styles[`gradient-list`]}>
        {blogCategories?.map(item => (
          <li
            onClick={() => {
              navigate(`/customer/blogs?category=${item.id}&name=${item.name}`);
            }}
            key={item.name}
          >
            {item.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BlogCategoriesList;
