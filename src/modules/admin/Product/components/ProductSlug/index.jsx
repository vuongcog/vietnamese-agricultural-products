import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import PropTypes from "../../../../../utils/prop-types";

const ProductSlug = ({ product_slug }) => {
  return (
    <div className={styles.productSlugContainer}>
      <FontAwesomeIcon icon={faTag} className={styles.icon} />
      <div className={styles.productSlug}>{product_slug}</div>
    </div>
  );
};
ProductSlug.propTypes = {
  product_slug: PropTypes.string,
};

export default ProductSlug;
