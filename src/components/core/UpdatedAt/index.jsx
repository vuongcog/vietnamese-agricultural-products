import React from 'react';
import { FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import formatDateTime from '../../../utils/formateDateTime';

const UpdatedAtComponent = ({ updated_at }) => (
  <div className={styles.container}>
    <FaClock className={styles.icon} />
    <span className={styles.dateText}>{formatDateTime(updated_at)}</span>
  </div>
);

UpdatedAtComponent.propTypes = {
  updated_at: PropTypes.string.isRequired,
};

export default UpdatedAtComponent;
