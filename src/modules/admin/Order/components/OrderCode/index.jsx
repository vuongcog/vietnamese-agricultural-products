import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Tooltip } from '@chakra-ui/react';
import CodeIcon from '@mui/icons-material/Code';

const OrderCode = ({ order_code }) => (
  <Tooltip placement="top" label={order_code} aria-label="Full text">
    <div className={styles.container}>
      <CodeIcon className={styles.icon}></CodeIcon>
      <span className={styles.label}>{order_code}</span>
    </div>
  </Tooltip>
);

OrderCode.propTypes = {
  product_name: PropTypes.string.isRequired,
};

export default OrderCode;
