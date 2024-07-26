import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Tooltip } from '@chakra-ui/react';

const OrderCustomer = ({ customer }) => (
  <Tooltip placement="top" label={customer} aria-label="Full text">
    <div className={styles.container}>
      <span className={styles.label}>{customer}</span>
    </div>
  </Tooltip>
);

OrderCustomer.propTypes = {
  product_name: PropTypes.string.isRequired,
};

export default OrderCustomer;
