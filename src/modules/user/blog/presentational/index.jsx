import React from 'react';
import useProducerBlog from '../../../../useCustom/user/useProducerBlog';
import classNames from 'classnames';
import styles from './styles.module.scss';
const BlogGuestLayout = () => {
  const { blog } = useProducerBlog();
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <h1 className="font-bold text-[48px] ">{blog.blog_title}</h1>
        <div
          className={(classNames('prose'), 'px-5 mt-6')}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
      <div className={styles.wrapper_image}>
        <img src={blog.blog_image} />
      </div>
    </div>
  );
};

export default BlogGuestLayout;
