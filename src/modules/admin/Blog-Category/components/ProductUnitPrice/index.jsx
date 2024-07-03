import React from "react";
import { formattedNumber } from "../../../../../utils/format-number";
import styles from "./styles.module.scss";
const ProductUnitPrice = ({ unit_prices }) => {
  return (
    <div className={styles.wrapper}>
      <span>{formattedNumber(unit_prices)}</span>
    </div>
  );
};

export default ProductUnitPrice;
