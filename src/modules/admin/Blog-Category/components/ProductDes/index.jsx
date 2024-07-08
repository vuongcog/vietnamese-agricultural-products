import React from 'react';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
const ProductDes = ({ product_des }) => (
  <div className={styles.wrapper}>{product_des}</div>
);
ProductDes.propTypes = {
  product_des: PropTypes.string,
};
export default ProductDes;
