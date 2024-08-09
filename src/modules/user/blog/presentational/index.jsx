import React from 'react';
import useProducerBlog from '../../../../useCustom/user/useProducerBlog';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import langsGlobal from '../../../../langs';
import { INACTIVE } from '../../../../constants/mapper-status';
const BlogGuestLayout = ({ handlerClickOthersBlog }) => {
  const { blog, allBlogs, relatedBlogs } = useProducerBlog();
  const { t } = useTranslation();
  if (blog.status === INACTIVE) return null;
  return (
    <div className={styles.layout}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className="font-bold text-[48px] ">{blog.blog_title}</h1>
          <div
            className={(classNames('prose'), 'px-5 mt-6')}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
        <div className={styles.wrapper_image}>
          <img src={blog.blog_image} />
          <h1>{t(langsGlobal.relatedBlogs)}</h1>
          <div>
            {relatedBlogs?.map(item => (
              <div
                onClick={() => handlerClickOthersBlog(item)}
                key={item.blog_slug}
                className={styles[`blog-others`]}
              >
                <img src={item.blog_image} alt="" />
                <div>
                  <h6>{item.blog_title}</h6>
                  <p
                    className={styles[`content-others`]}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                </div>
              </div>
            ))}
            {/* {allBlogs?.map(item => (
              <div
                onClick={() => handlerClickOthersBlog(item)}
                key={item.blog_slug}
                className={styles[`blog-others`]}
              >
                <img src={item.blog_image} alt="" />
                <div>
                  <h6>{item.blog_title}</h6>
                  <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGuestLayout;
