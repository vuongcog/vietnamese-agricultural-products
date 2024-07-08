import React from 'react';
import styles from './styles.module.scss';
import CartList from '../components/CartList';
import CartHeader from '../components/CartHeader';
import App from '../components/CartTest';

const CartModule = () => (
  <div>
    <CartHeader></CartHeader>
    <div className={styles.layout}>
      <CartList></CartList>
      <App></App>
    </div>
  </div>
);

export default CartModule;
