import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { getCart } from '../../../utils/cart/get-cart';

const CartNotToken = () => {
  const [carts, setCarts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setRefresh(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setCarts(getCart());
  }, [refresh]);

  return (
    <Link to={'/cart'} className={classNames(styles.container)}>
      <i className={classNames('fa fa-cart-plus', styles.cart)}></i>
      <span className={styles.cartCount}>{carts?.length}</span>
    </Link>
  );
};

export default CartNotToken;
