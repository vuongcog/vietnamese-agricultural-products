import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Tooltip } from '@chakra-ui/react';

const OrderDeliveryAddress = ({ delivery_address }) => (
  <Tooltip placement="top" label={delivery_address} aria-label="Full text">
    <div className={styles.container}>
      <span className={styles.label}>{delivery_address}</span>
    </div>
  </Tooltip>
);

OrderDeliveryAddress.propTypes = {
  product_name: PropTypes.string.isRequired,
};

export default OrderDeliveryAddress;
