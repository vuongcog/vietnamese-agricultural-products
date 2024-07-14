import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import useProducerCart from '../../../useCustom/user/useProducerCart';
import { useDispatch } from 'react-redux';
import { FETCH_CART } from '../../../actions/action-cart';

const Cart = () => {
  const { carts, refesh } = useProducerCart();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_CART, payload: { endpoint: '/giohang' } });
  }, [refesh]);
  return (
    <Link to={'/cart'} className={classNames(styles.container)}>
      <i className={classNames('fa fa-cart-plus', styles.cart)}></i>
      <span className={styles.cartCount}>{carts?.items?.length}</span>
    </Link>
  );
};

export default Cart;
