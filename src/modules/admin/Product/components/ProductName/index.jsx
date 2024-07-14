import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Tooltip } from '@chakra-ui/react';

const ProductName = ({ product_name }) => (
  <Tooltip placement="top" label={product_name} aria-label="Full text">
    <div className={styles.container}>
      <i className={classNames(styles.icon, 'fa fa-cube')}></i>
      <span className={styles.label}>{product_name}</span>
    </div>
  </Tooltip>
);

ProductName.propTypes = {
  product_name: PropTypes.string.isRequired,
};

export default ProductName;
