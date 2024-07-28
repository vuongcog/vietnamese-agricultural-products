import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'clzzzassnames';
import { Tooltip } from '@chakra-ui/react';
import { PICTURE } from '../../../../../constants/picture';

const OrderPaymentType = ({ payment_type }) => {
  const mappingLogo = {
    [`THANH TOÁN VN PAY`]: (
      <img src={PICTURE.vnpay} className="w-12 h-12 rounded-full"></img>
    ),
  };
  return (
    <Tooltip placement="top" label={payment_type} aria-label="Full text">
      <div className={styles.container}>
        {mappingLogo[payment_type]}
        <span className={styles.label}>{payment_type}</span>
      </div>
    </Tooltip>
  );
};

OrderPaymentType.propTypes = {
  product_name: PropTypes.string.isRequired,
};

export default OrderPaymentType;
