import React from "react";
import styles from "./styles.module.scss";

const BlogSlug = ({ blog_slug }) => {
  return <div className={styles.container}>{blog_slug}</div>;
};

export default BlogSlug;
