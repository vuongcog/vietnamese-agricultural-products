import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import useProducerBlog from '../../../../../useCustom/user/useProducerBlog';
import { useTranslation } from 'react-i18next';
import langsGlobal from '../../../../../langs';
const BlogWithCategory = ({ name }) => {
  const { blogs } = useProducerBlog();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={styles.layout}>
      <h1>{`${t(langsGlobal.blogsWithCategory)} ${name}`}</h1>
      <ol className={styles[`gradient-list`]}>
        {blogs?.map(item => (
          <li
            onClick={() => {
              navigate(`/blogs/blog/${item.blog_slug}`);
            }}
            key={item.blog_title}
          >
            <div className="flex gap-3 items-center">
              <img
                className={`w-[100px] h-[100px] object-cover`}
                src={item.blog_image}
                alt=""
              />
              <div>
                <div className={styles.title}>{item.blog_title}</div>
                <p
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BlogWithCategory;
