import React from "react";
import styles from "./styles.module.scss";

const BlogSlug = ({ content }) => {
  return <div className={styles.container}>{content}</div>;
};

export default BlogSlug;
