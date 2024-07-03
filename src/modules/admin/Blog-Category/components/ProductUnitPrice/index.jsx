import React from "react";
import { formattedNumber } from "../../../../../utils/format-number";
import styles from "./styles.module.scss";
import PropTypes from "../../../../../utils/prop-types";
const ProductUnitPrice = ({ unit_prices }) => {
  return (
    <div className={styles.wrapper}>
      <span>{formattedNumber(unit_prices)}</span>
    </div>
  );
};
ProductUnitPrice.propTypes = {
  unit_prices: PropTypes.string,
};

export default ProductUnitPrice;
