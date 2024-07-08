import React from 'react';
import { FaCalendarTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import formatDateTime from '../../../../../utils/formateDateTime';

const CouponStartDate = ({ coupon_end_date }) => (
  <div className={styles.container}>
    <FaCalendarTimes className={styles.icon} />
    <span className={styles.dateText}>{formatDateTime(coupon_end_date)}</span>
  </div>
);

CouponStartDate.propTypes = {
  coupon_end_date: PropTypes.string.isRequired,
};

export default CouponStartDate;
