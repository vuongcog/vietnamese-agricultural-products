import React from 'react';
import useProducerBlog from '../../../../useCustom/user/useProducerBlog';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { others } from '@chakra-ui/react';
const BlogGuestLayout = () => {
  const { blog, allBlogs } = useProducerBlog();
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
        <h1>Các bài viết có liên quan</h1>
        <div style={{ listStyle: 'none' }}>
          {allBlogs?.map(item => (
            <div key={item.blog_slug} className={styles[`blog-others`]}>
              <img src={item.blog_image} alt="" />
              <div>
                <h6>{item.blog_title}</h6>
                <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogGuestLayout;
