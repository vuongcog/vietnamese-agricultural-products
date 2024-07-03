import React from "react";
import BookIcon from "@mui/icons-material/Book";
import styles from "./styles.module.scss";

const BlogIcon = ({ blog_title }) => {
  return (
    <div className={styles.container}>
      <BookIcon className={styles.icon} />
      <h2 className={styles.title}>{blog_title}</h2>
    </div>
  );
};

export default BlogIcon;
