import React from "react";
import styles from "./styles.module.scss";
const ProductDes = ({ product_des }) => {
  return <div className={styles.wrapper}>{product_des}</div>;
};

export default ProductDes;
