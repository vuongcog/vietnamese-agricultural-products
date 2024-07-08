import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import classNames from 'classnames';

const ProductName = ({ product_name }) => (
  <div className={styles.container}>
    <i className={classNames(styles.icon, 'fa fa-cube')}></i>
    <span className={styles.label}>{product_name}</span>
  </div>
);

ProductName.propTypes = {
  product_name: PropTypes.string.isRequired,
};

export default ProductName;
