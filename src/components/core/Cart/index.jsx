import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import useProducerCart from '../../../useCustom/user/useProducerCart';

const Cart = () => {
  const { carts } = useProducerCart();
  return (
    <Link to={'/customer/cart'} className={classNames(styles.container)}>
      <i className={classNames('fa fa-cart-plus', styles.cart)}></i>
      <span className={styles.cartCount}>{carts?.items?.length}</span>
    </Link>
  );
};

export default Cart;
