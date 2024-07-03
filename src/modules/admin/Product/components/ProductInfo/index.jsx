import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import classNames from "classnames";
const ProductInfo = ({ product_info }) => {
  return (
    <div className={styles.container}>
      <i className={classNames(styles.icon, "fa fa-cube")}></i>
      <span className={`${styles.label}`}>{product_info}</span>
    </div>
  );
};
ProductInfo.propTypes = {
  link: PropTypes.string,
};
export default ProductInfo;
