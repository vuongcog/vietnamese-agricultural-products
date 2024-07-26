import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Tooltip } from '@chakra-ui/react';

const OrderPaymentStatus = ({ payment_status }) => (
  <Tooltip placement="top" label={payment_status} aria-label="Full text">
    <div className={styles.container}>
      <span className={styles.label}>{payment_status}</span>
    </div>
  </Tooltip>
);

OrderPaymentStatus.propTypes = {
  product_name: PropTypes.string.isRequired,
};

export default OrderPaymentStatus;
