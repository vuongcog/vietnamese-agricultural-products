import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import useProducerCart from '../../../useCustom/user/useProducerCart';
import { useDispatch } from 'react-redux';
import { FETCH_CART } from '../../../actions/action-cart';
import { ACTIVE } from '../../../constants/mapper-status';

const Cart = () => {
  const { carts, refesh } = useProducerCart();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_CART, payload: { endpoint: '/giohang' } });
  }, [refesh]);
  if (_.isEmpty(carts)) return null;
  const lenght = carts.items.filter(
    item => item.product.quantity > 0 && item.product.status === ACTIVE
  ).length;
  return (
    <Link to={'/cart'} className={classNames(styles.container)}>
      <i className={classNames('fa fa-cart-plus', styles.cart)}></i>
      <span className={styles.cartCount}>{lenght}</span>
    </Link>
  );
};

export default Cart;
