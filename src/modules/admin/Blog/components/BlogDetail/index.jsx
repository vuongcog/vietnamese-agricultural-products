import React from 'react';
import styles from './BlogDetail.module.scss';
import ProductDes from '../../../Product/components/ProductDes';
import ProductInfo from '../../../Product/components/ProductInfo';
import BlogContent from '../BlogContent';

const BlogDetail = ({ blog }) => {
  return (
    <div className={styles.layout}>
      <div className={styles[`background-detail`]}></div>
      <div className={styles.profileContainer}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatar}
            src={blog.blog_image}
            alt={`Avatar of ${blog.id}`}
          />
        </div>
        <h2 className={styles.name}>{blog.blog_title}</h2>
        {/* <p className={styles.email}>{user.email}</p> */}
        <span
          className={`${styles.badge} ${
            blog.status === 'active' ? styles.active : styles.inactive
          }`}
        >
          {blog.status}
        </span>
        <div className={styles.info}>
          <p>
            <strong>View:</strong> {blog.view}
          </p>
          <div className="flex gap-1 items-center">
            <strong>Information:</strong>{' '}
            {<BlogContent content={blog.content}></BlogContent>}
          </div>
          <p>
            <strong>Created at:</strong>{' '}
            {new Date(blog.created_at).toLocaleString()}
          </p>
          <p>
            <strong>Updated at:</strong>{' '}
            {new Date(blog.updated_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
