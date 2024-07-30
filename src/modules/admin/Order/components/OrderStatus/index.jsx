import React from 'react';
import { MAPPER_STATUS_ORDER } from '../../../../../constants/mapper-status-order';
import styles from './styles.module.scss';
const OrderStatus = ({ status }) => (
  <div className={styles.container}>
    <span>{MAPPER_STATUS_ORDER[status]}</span>
  </div>
);

export default OrderStatus;
