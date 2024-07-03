import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const ProductImage = ({ product_image }) => {
  if (!product_image) {
    return <div className={styles.avatarCell}>N/A</div>;
  }
  return (
    <div className={styles.avatarCell}>
      <img src={product_image} alt="Avatar" className={styles.avatar} />
    </div>
  );
};

ProductImage.propTypes = {
  product_image: PropTypes.string,
};

export default ProductImage;
