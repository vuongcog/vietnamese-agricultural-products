import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "../../../../../utils/prop-types";

const BlogSlug = ({ blog_slug }) => {
  return <div className={styles.container}>{blog_slug}</div>;
};
BlogSlug.propTypes = {
  blog_slug: PropTypes.string,
};

export default BlogSlug;
