import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "../../../../../utils/prop-types";

const BlogContent = ({ content }) => {
  return <div className={styles.container}>{content}</div>;
};
BlogContent.propTypes = {
  content: PropTypes.string,
};
export default BlogContent;
