import React from "react";
import { FaCalendarAlt, FaRegCalendarAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import formatDateTime from "../../../../../utils/formateDateTime";

const CouponEndDate = ({ coupon_start_date }) => {
  return (
    <div className={styles.container}>
      <FaRegCalendarAlt className={styles.icon} />
      <span className={styles.dateText}>
        {formatDateTime(coupon_start_date)}
      </span>
    </div>
  );
};

CouponEndDate.propTypes = {
  coupon_end_date: PropTypes.string.isRequired,
};

export default CouponEndDate;
