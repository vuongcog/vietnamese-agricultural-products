import React from 'react';
import styles from './styles.module.scss';
import useProducerBlog from '../../../../../useCustom/user/useProducerBlog';
import { useNavigate } from 'react-router-dom';
import langsGlobal from '../../../../../langs';
import { useTranslation } from 'react-i18next';
const BlogCategoriesList = () => {
  const { blogCategories } = useProducerBlog();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={styles.layout}>
      <h1>{t(langsGlobal.blogCategories)}</h1>
      <ol className={styles[`gradient-list`]}>
        {blogCategories?.map(item => {
          if (item.status === 'inactive') return null;
          return (
            <li
              className="hover:cursor-pointer"
              onClick={() => {
                navigate(`/blogs?category=${item.id}&name=${item.name}`);
              }}
              key={item.name}
            >
              {item.name}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default BlogCategoriesList;
