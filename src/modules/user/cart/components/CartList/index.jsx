import React from "react";
import CartItem from "../CartItem";
import styles from "./styles.module.scss";
import useProducerCart from "../../../../../useCustom/user/useProducerCart";
const CartList = () => {
  const { carts } = useProducerCart();
  console.log(carts);
  return (
    <div className={styles.container}>
      {carts?.map((item, index) => {
        return (
          <CartItem {...item} handleDelete={() => {}} key={index}></CartItem>
        );
      })}
    </div>
  );
};

export default CartList;
