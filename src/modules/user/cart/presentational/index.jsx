import React from 'react';
import styles from './styles.module.scss';
import CartList from '../components/CartList';
import CartHeader from '../components/CartHeader';

const CartModule = () => (
  <div className={styles.module}>
    <CartHeader></CartHeader>
    <div className={styles.layout}>
      <CartList></CartList>
    </div>
  </div>
);

export default CartModule;
