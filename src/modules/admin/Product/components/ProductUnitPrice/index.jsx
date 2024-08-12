import React from 'react';
import { formattedNumber } from '../../../../../utils/format-number';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
const ProductUnitPrice = ({ unit_prices }) => (
  <div className={styles.wrapper}>
    <span>
      {parseFloat(unit_prices).toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      })}
    </span>
  </div>
);
ProductUnitPrice.propTypes = {
  unit_prices: PropTypes.string,
};
export default ProductUnitPrice;
