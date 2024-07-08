import React from 'react';
import CartItem from '../CartItem';
import styles from './styles.module.scss';
import useProducerCart from '../../../../../useCustom/user/useProducerCart';
const CartList = () => {
  const { carts } = useProducerCart();
  return (
    <div className={styles.container}>
      {carts?.map((item, index) => (
        <CartItem {...item} handleDelete={() => {}} key={index}></CartItem>
      ))}
    </div>
  );
};

export default CartList;
