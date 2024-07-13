import React from 'react';
import CartItem from '../CartItem';
import styles from './styles.module.scss';
import PropTypes from '../../../../../utils/prop-types';
const ProductList = ({
  products,
  handlerSetQuantity,
  handlerDeleteProduct,
}) => {
  if (_.isEmpty(products)) return;
  return (
    <div className={styles.container}>
      {products?.map((item, index) => (
        <CartItem
          {...item}
          handlerDeleteProduct={handlerDeleteProduct}
          handlerSetQuantity={handlerSetQuantity}
          key={index}
        ></CartItem>
      ))}
    </div>
  );
};

export default ProductList;
