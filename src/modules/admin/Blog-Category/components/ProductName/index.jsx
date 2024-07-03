import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import classNames from "classnames";
const ProductName = ({ product_name }) => {
  return (
    <div className={styles.container}>
      <i className={classNames(styles.icon, "fa fa-cube")}></i>
      <span className={`${styles.label}`}>{product_name}</span>
    </div>
  );
};
ProductName.propTypes = {
  link: PropTypes.string,
};
export default ProductName;
