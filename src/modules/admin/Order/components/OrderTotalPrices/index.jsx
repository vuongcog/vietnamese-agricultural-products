import React from 'react';
import { formattedNumber } from '../../../../../utils/format-number';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
const OrderTotalPrice = ({ order_total_prices }) => (
  <div className={styles.wrapper}>
    <span>
      {parseFloat(order_total_prices).toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      })}
    </span>
  </div>
);
OrderTotalPrice.propTypes = {
  unit_prices: PropTypes.string,
};
export default OrderTotalPrice;
