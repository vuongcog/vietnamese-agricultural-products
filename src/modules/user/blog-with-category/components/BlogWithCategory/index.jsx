import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import useProducerBlog from '../../../../../useCustom/user/useProducerBlog';
const BlogWithCategory = ({ name }) => {
  const { blogs } = useProducerBlog();
  const navigate = useNavigate();
  console.log(blogs);
  return (
    <div className={styles.layout}>
      <h1>{`Tất cả bài viết liên quan đến ${name}`}</h1>
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
