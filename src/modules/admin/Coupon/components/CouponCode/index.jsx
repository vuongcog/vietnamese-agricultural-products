import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { MdCode } from 'react-icons/md';
import styles from './styles.module.scss'; // Đảm bảo đường dẫn đến file CSS Modules là chính xác
import PropTypes from '../../../../../utils/prop-types';

const CouponCode = ({ coupon_code }) => (
  <Box className={styles.couponContainer}>
    <Icon as={MdCode} className={styles.icon} />
    <span className={styles.code}>{coupon_code}</span>
  </Box>
);
CouponCode.propTypes = {
  coupon_code: PropTypes.string,
};

export default CouponCode;
